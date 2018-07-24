Planner.skillTreeStyle = [
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
            "line-color": "#feff85",
            "opacity": "0.9"
        }
    },
    {
        selector: 'edge.canActivate',
        style: {
            "line-color": "#8588ff",
            "opacity": "0.9"
        }
    }
];