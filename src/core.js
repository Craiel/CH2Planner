let Planner = (function(){
    'use strict';

    function PlannerCore() {
        this.intervals = {};
        this.data = {};
        this.skillData = {};
        this.skillDataAddon = {};
        this.nodes = {};
        this.lastFixedUpdate = new Date().getTime();
    }

    PlannerCore.prototype.constructor = PlannerCore;

    PlannerCore.prototype.init = function () {
        this.createInterval("Loading Animation", this.loadAnimation, 10);
        this.createInterval("Loading", this.loadDelay, 1000);

        this.updateFrame(0);
    };

    PlannerCore.prototype.updateFrame = function(time) {
        Planner.update(time - Planner.lastUpdateTime);
        Planner.lastUpdateTime = time;

        // This ensures that we wait for the browser to "catch up" to drawing and other events
        window.requestAnimationFrame(Planner.updateFrame);
    };

    PlannerCore.prototype.update = function(delta) {
        if (isNaN(delta)) {
            return;
        }

        for (let name in this.intervals) {
            let data = this.intervals[name];
            data.e += delta;
            if (data.e > data.d) {
                data.c(this, data.e / 1000);
                data.e = 0;
            }
        }
    };

    PlannerCore.prototype.createInterval = function(name, callback, delay) {
        this.intervals[name] = {c: callback, d: delay, e: 0}
    };

    PlannerCore.prototype.deleteInterval = function(name) {
        delete this.intervals[name];
    };

    PlannerCore.prototype.loadAnimation = function(self, delta) {
        self.deleteInterval("Loading Animation");
    };

    PlannerCore.prototype.fixedUpdate = function() {
        let currentTime = new Date().getTime();
        let delta = (currentTime - this.lastFixedUpdate) / 1000;
        this.lastFixedUpdate = currentTime;

        // TODO
    };

    PlannerCore.prototype.slowUpdate = function(self, delta) {
        // TODO
    };

    PlannerCore.prototype.fastUpdate = function(self, delta) {
        // TODO
    };

    PlannerCore.prototype.uiUpdate = function(self, delta) {
        // TODO
    };

    PlannerCore.prototype.loadDelay = function (self, delta) {

        self.deleteInterval("Loading");

        // Now load
        self.load();

        // Then start the main loops
        self.createInterval("Fast Update", self.fastUpdate, 100);
        self.createInterval("Slow Update", self.slowUpdate, 1000);
        self.createInterval("UI Update", self.uiUpdate, 10);

        // Do this in a setInterval so it gets called even when the window is inactive
        window.setInterval(function(){ Planner.fixedUpdate(); },100);

        console.debug("Load Complete");
    };

    PlannerCore.prototype.load = function(){
        this.loadSkillData();
        this.loadGraphData();

        this.skillTree = Planner.createSkillTree();
        this.skillTree.init();
    };

    PlannerCore.prototype.loadSkillData = function() {
        for (let classId in Planner.data.classes) {

            if(!Planner.skillData.hasOwnProperty(classId)){
                console.error("No skill data for Class: " + classId);
                continue;
            }

            let classData = Planner.data.classes[classId];
            let skillDataSet = Planner.skillData[classId];
            let skillAddonDataSet = Planner.skillDataAddon[classId];

            let skillCount = 0;

            classData["Skills"] = {};
            for(let skillId in skillDataSet.skills) {
                if (skillId === "") {
                    continue;
                }

                let skillSourceData = skillDataSet.skills[skillId];
                let skillSourceAddonData = {};

                if (skillAddonDataSet && skillAddonDataSet.skills[skillId]) {
                    skillSourceAddonData = skillAddonDataSet.skills[skillId];
                }

                // Merge the import and the addon data together
                let skillData = Object.assign({
                    name: skillSourceData["name"],
                    icon: skillSourceData["icon"],
                    toolTip: skillSourceData["tooltip"],
                    flavorText: skillSourceData["flavorText"],
                }, skillSourceAddonData);

                // Validate the data
                if(skillData.category === undefined) {
                    console.error("Skill Category not set for: " + skillId + " -- " + skillData.name);
                }

                classData["Skills"][skillId] = skillData;
                skillCount++;
            }

            console.log("Loaded " + skillCount + " skills for " + classId)
        }
    };

    PlannerCore.prototype.loadGraphData = function() {
        for (let classId in Planner.data.classes) {

            if (!Planner.skillData.hasOwnProperty(classId)) {
                console.error("No graph data for Class: " + classId);
                continue;
            }

            let classData = Planner.data.classes[classId];
            let edgeDataSet = Planner.skillData[classId].graph["edges"];
            let nodeDataSet = Planner.skillData[classId].graph["nodes"];

            console.log("Loading Graph for " + classId + " with " + edgeDataSet.length + " Edges and " + nodeDataSet.length + " Nodes ");

            for(let i = 0; i < edgeDataSet.length; i++){
                let edgeData = edgeDataSet[i];
                let edgeId = Object.keys(edgeData)[0];
                edgeData = edgeData[edgeId];

                console.log(edgeData);
            }

            for(let i = 0; i < nodeDataSet.length; i++){
                let nodeData = nodeDataSet[i];
                let nodeId = Object.keys(nodeData)[0];
                nodeData = nodeData[nodeId];

                console.log(nodeData)
            }
        }

        /*

            let nodeData = {};
            let skillData = {};

            let importData = Planner.skillDataImport[classId];
            if(!importData){
                console.error("Class has no data to import: " + classId);
                continue;
            }

            for(let skillId in importData.Skills) {
                //console.log(skillId);
            }

            for(let edgeId in importData.Graph["edges"]){
                //console.log(edge)
            }

            for(let nodeId in importData.Graph["nodes"]){
            }

            Planner.runtimeData[classId].nodes = nodeData;
            Planner.runtimeData[classId].skills = nodeData;*/
    };

    return new PlannerCore();

})();