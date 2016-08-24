# placeholder-plugin
Placeholder plugin for TinyMce editor

Usage Example:

```javascript
tinymce.init({
	selector: 'textarea',
	plugins: ['placeholder'],
	toolbar: 'placeholder',
	
	//placeholders: ['{{base_url}}', '{{site_url}}']
	
	placeholders: [
		{text: 'Base URL', value: '{{base_url}}'},
		{text: 'Site URL', value: '{{site_url}}'}
	]
	
});
```
