var myTemplateConfig = {
  colors: [ "DimGray", "CadetBlue", "Aquamarine", "CornflowerBlue", "DeepPink", "GreenYellow", "DarkGoldenRod", "IndianRed" ], // branches colors, 1 per column,
  author: '',
  branch: {
    lineWidth: 3,
    spacingX: 25,
    showLabel: true,                  // display branch names on graph
  },
  orientation: 'vertical-revers',
  commit: {
    spacingY: -80,
    dot: {
      size: 12
    },
    message: {
      displayAuthor: true,
      displayBranch: false,
      displayHash: false,
      font: "normal 12pt Arial"
    },
    shouldDisplayTooltipsInCompactMode: false, // default = true
    tooltipHTMLFormatter: function ( commit ) {
      return "" + commit.sha1 + "" + ": " + commit.message;
    }
  }
};