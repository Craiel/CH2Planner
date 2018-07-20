let Planner = (function(){
    'use strict';

    let instance = {
        data: {},
        nodes: {}
    };

    instance.start = function() {
        Planner.cy = cytoscape({
            container: document.getElementById('cy'),
            style: [
                {
                    selector: 'node',
                    style: {
                        'shape': 'ellipse',
                        'width': 64,
                        'height': 64
                    }
                },
                {
                    selector: 'node.skillUnlock',
                    style: {
                        'shape': 'ellipse',
                        'width': 96,
                        'height': 96
                    }
                },
                {
                    selector: 'node.system',
                    style: {
                        'shape': 'ellipse',
                        'width': 64,
                        'height': 64
                    }
                },
                {
                    selector: 'node.majorSkill',
                    style: {
                        'shape': 'ellipse',
                        'width': 128,
                        'height': 128
                    }
                },
                {
                    selector: 'node.majorStat',
                    style: {
                        'shape': 'ellipse',
                        'width': 128,
                        'height': 128
                    }
                },
                {
                    selector: 'node.skillLearned',
                    style: {
                        "border-width": "6px",
                        "border-color": "red",
                        "border-opacity": "0.5",
                        "background-color": "#e1dcc8",
                        "text-outline-color": "#e1dcc8"
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        "line-color": "gray",
                        "opacity": "0.5"
                    }
                },
                {
                    selector: 'edge.active',
                    style: {
                        "line-color": "red",
                        "opacity": "0.9"
                    }
                }
            ],
            elements: [{}],
            autolock: true,
            autounselectify: true,
            autoungrabify: true
        });

        let processedNodeData = [];

        let treeData = {
            nodes: {},
            edges: {}
        };

        const nodeSpacing = 1.8;
        for (let i in Planner.treeData.nodes){
            let id = Object.keys(Planner.treeData.nodes[i])[0];
            let nodeEntry = Planner.treeData.nodes[i][id];
            let nodeSkillData = Planner.skillData[nodeEntry['val']];
            let nodeX = nodeEntry['x'] * nodeSpacing;
            let nodeY = nodeEntry['y'] * nodeSpacing;

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

        Planner.cy.remove(Planner.cy.nodes().first());
        Planner.cy.add(processedNodeData);

        Planner.cyLayout = Planner.cy.layout({name: 'preset'});
        Planner.cyLayout.run();

        $('#config-toggle').on('click', function(){
            $('body').toggleClass('config-closed');

            Planner.cy.resize();
        });

        Planner.cy.nodes().forEach(function(n){
            let node = Planner.createSkillNode(n.data('id'));
            node.init(n);

            Planner.nodes[node.id] = node;
        });

        //Get the file contents

        var str = JSON.stringify(Planner.skillData);

        //Save the file contents as a DataURI
        var dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(str);

        //Write it as the href for the link
        var link = document.getElementById('dataExport').href = dataUri;
    };

    return instance;

})();

window.onload = function(){
    Planner.start();
};
