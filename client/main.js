import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.editor.helpers({
  docid: function(){
    console.log("doc id defined:");
    console.log(Documents.findOne({}));
    var doc = Documents.findOne({});
    if (doc){
      return doc._id;
    } else {
      return undefined;
    }
  },
  config:function(){
    return function(editor){
      //keymap: "sublime.js";
      editor.on("change", function(cm_editor, info){
        console.log(cm_editor.getValue());
        $("#viewer_iframe").contents().find("html").html(cm_editor.getValue());
      });
    }
  }
});