 /* 
 ** var text: holds JSON object that is used to populate pop up table.
 *           -format: command name, format prompt, help text, command type, subcommands (if any)
 */

  var text = {"myCommands":[{"command":"add", "formatHint":"[member, member, ...]", "helpText":"Add one or more members to this room", "type":"kore", "subCommands": []}, 
  {"command":"away", "formatHint":"", "helpText":"Sets your status to away", "type":"kore", "subCommands":[]},
  {"command":"busy", "formatHint":"", "helpText":"Sets your status to busy", "type":"kore", "subCommands":[]},
  {"command":"collapse", "formatHint":"", "helpText":"Set all posts/messages to their closed state to browse faster", "type":"kore", "subCommands":[]},
  {"command":"expand", "formatHint":"", "helpText":"Sets all posts/messages to their open state for easy reading", "type":"kore", "subCommands":[]},
  {"command":"help", "formatHint":"", "helpText":"Get help on all /commands", "type":"kore", "subCommands":[]},
  {"command":"invite", "formatHint":"[user, user, ...]", "helpText":"invite one or more users to this space by email or phone number", "type":"kore", "subCommands":[]},
  {"command":"leaveroom", "formatHint":"", "helpText":"leave this room, but stay in the space", "type":"kore", "subCommands":[]},
  {"command":"leavespace", "formatHint":"", "helpText":"leave the 'Android Developement' space all together", "type":"kore", "subCommands":[]},
  {"command":"msg", "formatHint":"[member] [your message]", "helpText":"Send a quick direct message to a member", "type":"kore", "subCommands":[]},
  {"command":"status", "formatHint":"[your status]", "helpText":"Sets your status message for all to see", "type":"kore", "subCommands":[]},
  {"command":"asana", "formatHint":"[comment, add task, list tasks]", "helpText":"Add or comment on tasks in Asana", "type":"App", "subCommands":[
  {"command":"addtask", "formatHint":"[task name], [due date], [project]", "helpText":"Add a task into Asana", "type":"Asana"},
  {"command":"comment", "formatHint":"[task ID], [comment]", "helpText":"Add a comment to a task", "type":"Asana"},
  {"command":"list", "formatHint":"[project]", "helpText":"List all your upcoming tasks in a project", "type":"Asana"}]},

  
  {"command":"gify", "formatHint":"[search term]", "helpText":"Posts a random GIF to this room", "type":"App", "subCommands":[
  {"command":"gify1", "formatHint":"[format1]", "helpText":"gify help text", "type":"Gify"},
  {"command":"gify2", "formatHint":"[format2]", "helpText":"some more gify help text", "type":"Gify"}]},
  
  {"command":"hangout", "formatHint":"", "helpText":"Start a Google hangout in this room", "type":"App", "subCommands":[]},
  
  {"command":"jira", "formatHint":"[add issue, comment, lookup]", "helpText":"Add issues, comments or llok up info from gira", "type":"App", "subCommands":[]},
  
  {"command":"twitter", "formatHint":"[tweet, DM]", "helpText":"Tweet or Direct Messages in Twitter", "type":"App", "subCommands":[]}]
  };




  function getData()
  {
    return text;
  }