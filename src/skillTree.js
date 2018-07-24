Planner.createSkillTree = (function(){

    function SkillTree() {
        this.cy = null;
        this.layout = null;
        this.spacing = 1.8;
        this.nodes = {};
        this.classId = "Cid"
    }

    SkillTree.prototype.constructor = SkillTree;

    SkillTree.prototype.init = function () {
        this.cy = cytoscape({
            container: document.getElementById('cy'),
            style: Planner.skillTreeStyle,
            elements: [{}],
            autolock: true,
            autounselectify: true,
            autoungrabify: true
        });

        this.rebuild();

        this.layout = this.cy.layout({name: 'preset'});

        $('#config-toggle').on('click', function(){
            $('body').toggleClass('config-closed');

            Planner.skillTree.resize();
        });
    };

    SkillTree.prototype.resize = function() {
        this.cy.resize();
    };

    SkillTree.prototype.setClass = function(classId) {
        if(this.classId === classId){
            return;
        }

        this.classId = classId;
        this.rebuild();
    };

    SkillTree.prototype.isLearned = function(nodeId) {
        return this.nodes[nodeId].isLearned;
    };

    SkillTree.prototype.rebuild = function () {
        let treeData = {
            nodes: {},
            edges: {}
        };

        let processedNodeData = [];

        for (let i in Planner.treeData.nodes){
            let id = Object.keys(Planner.treeData.nodes[i])[0];
            let nodeEntry = Planner.treeData.nodes[i][id];
            let nodeX = nodeEntry['x'] * this.spacing;
            let nodeY = nodeEntry['y'] * this.spacing;

            let cyId = "N" + id;
            treeData.nodes[cyId] = {
                group: "nodes", data: {id: cyId, intId: id, skill: nodeEntry['val']}, position: {x: nodeX, y: nodeY}
            };

            processedNodeData.push(treeData.nodes[cyId]);
        }

        for (let i in Planner.treeData.edges){
            let id = parseInt(Object.keys(Planner.treeData.edges[i])[0]);
            let edgeEntry = Planner.treeData.edges[i][id];
            let from = "N" + edgeEntry[0];
            let to = "N" + edgeEntry[1];

            treeData.edges[id] = {
                group: "edges", data: {id: id, source: from, target: to}
            };

            processedNodeData.push(treeData.edges[id]);
        }

        console.log("Added " + Planner.treeData.nodes.length + " Nodes");
        console.log("Added " + Planner.treeData.edges.length + " Edges");

        for(let node in this.nodes) {
            console.log(node)
        }

        this.cy.remove("node");
        this.cy.add(processedNodeData);

        Planner.cyLayout = this.cy.layout({name: 'preset'});
        Planner.cyLayout.run();

        this.cy.nodes().forEach(function(n){
            let node = Planner.createSkillNode(n.data('id'));
            node.init(n);

            Planner.skillTree.nodes[node.id] = node;
        });
    };

    return function(id) { return new SkillTree(id); }
}());