/**
 * Placeholder plugin for TinyMce editor
 *
 * @author Sujeet <sujeetkv90@gmail.com>
 * @link https://github.com/sujeetkv/placeholder-plugin
 */

tinymce.PluginManager.add('placeholder', function(editor, url){
	var placeholder_items = editor.getParam('placeholders', []), /* editor.settings.placeholders || [] */
	    placeholders = [],
	    click_handler = function(){
	        editor.insertContent(this.settings.value);
	    };
	
	for(var i in placeholder_items){
		var item = false;
		
		if('object' === typeof placeholder_items[i] && placeholder_items[i].value)
		{
			item = {};
			item.value = placeholder_items[i].value;
			item.text = placeholder_items[i].text || item.value;
		}
		else if('string' === typeof placeholder_items[i])
		{
			item = {};
			item.value = placeholder_items[i];
			item.text = item.value;
		}
		
		if(item){
			item.onclick = click_handler;
			placeholders.push(item);
		}
	}
	
	editor.addButton('placeholder', {
		text: 'Placeholders',
		name: 'placeholder',
		type: 'menubutton',
		icon: false,
		menu: placeholders
		/*menu: [
			{ text: 'One', value: '{{one}}', onclick: function(){editor.insertContent(this.settings.value);} },
			{ text: 'Two', value: '{{two}}', onclick: function(){editor.insertContent(this.settings.value);} }
		]*/
	});
	
	editor.addMenuItem('placeholder', {
		text: 'Placeholders',
		name: 'placeholder',
		context: 'tools',
		menu: placeholders
	});

});
