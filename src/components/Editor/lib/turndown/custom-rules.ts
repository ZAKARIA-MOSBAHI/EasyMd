import type TurndownService from "turndown";

function checkboxItem(turndownService : TurndownService) {
  turndownService.addRule('checkboxItem', {
    filter: function (node) {
       const nodeName = node.nodeName;
      const checkboxAttribute = node.getAttribute('data-list');
      const isCheckbox = checkboxAttribute === 'checked' || checkboxAttribute === 'unchecked';
      // these the characteristics of a checkbox inside a list item in quill
       return nodeName === 'LI' && isCheckbox;
     }
    ,
    replacement: function (content, node) {

      // Check if this LI contains a checkbox (quill checkbox structure)
      const isChecked = node.getAttribute('data-list') === 'checked';
      return (isChecked ? '\n- [x] ' : '- [ ] ') + content;
    }
  });
}
function codeBlock(turndownService : TurndownService) {
  turndownService.addRule('codeBlock', {
     filter: function (node) {
      const isCodeBlock = node.nodeName === 'PRE' && node.getAttribute('data-language') !== null;
       return isCodeBlock;
    },
    
    replacement: function (content, node) {
       const language = node.getAttribute('data-language') || 'plain';
        
      // Format as markdown
      if (language) {
        return '```' + language + '\n' + content + '\n```\n\n';
      } else {
        return '```\n' + content + '\n```\n\n';
      }
    }
  });
}

export {
     checkboxItem ,
     codeBlock
}