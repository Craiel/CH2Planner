Planner.createSkillNode = (function(){

    function SkillNode(id) {
        this.id = id;
        this.isLearned = false;
        this.canLearn = false;
    }

    SkillNode.prototype.constructor = SkillNode;

    SkillNode.prototype.init = function (cyNode) {
        this.cyNode = cyNode;
        this.skillId = cyNode.data('skill');

        this.skillData = Planner.skillData[this.skillId];
        if(this.skillData === null){
            console.error("Skill Node has invalid skill id: " + this.skillId);
        }

        this.cyNode.addClass(this.skillData['category']);

        this.cyNode.css("background-image", "url(img/" + this.skillData['icon'] + ".png)");
        this.cyNode.css("background-repeat", "no-repeat");
        this.cyNode.css("background-fit", "contain");
        this.cyNode.css("background-color", "gray");

        this.initializeTooltip();

        this.cyNode.on('mouseover', () => this.showTooltip());
        this.cyNode.on('mouseout', () => this.hideTooltip());
        this.cyNode.on('tap', () => this.learnSkill());
        this.cyNode.on('cxttap', () => this.unLearnSkill());

        this.updateNodeState();
    };

    SkillNode.prototype.initializeTooltip = function () {
        this.toolTip = tippy(this.cyNode.popperRef(), { // tippy options:
            html: (() => {
                let content = document.createElement('div');

                content.innerHTML = this.skillData['name'];

                return content;
            })(),
            trigger: 'manual'
        }).tooltips[0];
    };

    SkillNode.prototype.showTooltip = function () {
        this.toolTip.show();
    };

    SkillNode.prototype.hideTooltip = function () {
        this.toolTip.hide();
    };

    SkillNode.prototype.learnSkill = function () {
        if (this.isLearned === true) {
            return;
        }

        console.log("Learning " + this.skillId);

        // #e1dcc8
        this.cyNode.addClass('skillLearned')
        this.isLearned = true;
        this.updateEdges();

        this.updateNodeState();
    };

    SkillNode.prototype.unLearnSkill = function () {
        if (this.isLearned === false) {
            return;
        }

        console.log("Unlearning " + this.skillId);
        this.cyNode.removeClass('skillLearned')
        this.isLearned = false;
        this.updateEdges();

        this.updateNodeState();
    };

    SkillNode.prototype.updateNodeState = function () {
        // - Go through connectedEdges()
        // - change the style based on this.isLearned
        // - change the background color / image based on isLearned
        // - notify the Planner compute engine to recompute states / skills etc
        if(this.isLearned){
            this.cyNode.css("background-color", "#feff85");
        } else {
            this.cyNode.css("background-color", "grey");
        }
    };

    SkillNode.prototype.updateEdges = function () {
        let edges = this.cyNode.connectedEdges();

        for (let i = 0, len = edges.length; i < len; i++) {
            let edge = edges[i];
            if (this.edgeHasActiveNode(edge)) {
                let bothSidesActive = this.edgeHasActiveNode(edge);

                if (bothSidesActive) {
                    edge.addClass('active');
                } else {
                    edge.removeClass('active');
                }

                if (this.isLearned === true && bothSidesActive === false) {
                    edge.addClass('canActivate');
                } else {
                    edge.removeClass('canActivate');
                }
            }
        }
    };

    SkillNode.prototype.edgeHasActiveNode = function (edge) {
        let nodes = edge.connectedNodes();

        for (let i = 0, len = nodes.length; i < len; i++) {
            let nodeId = nodes[i].data('id');
            if(Planner.skillTree.isLearned(nodeId) === true) {
                return true;
            }
        }

        return false;
    };

    return function(id) { return new SkillNode(id); }
}());