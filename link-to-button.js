(function() {
    tinymce.PluginManager.add('link_to_button', function(editor, url) {
        editor.addButton('link_to_button', {
            text: 'LinkToButton',
            icon: false,
            stateSelector: '.link_to_button',
            onclick: function() {
                state = this.active();
                if (state) {
                    row = tinymce.activeEditor.selection.getNode().closest('.link_to_button');
                    ltb_title = row.innerHTML;
                    ltb_link = row.href;
                    ltb_type = 'primary';
                    if(row.classList.contains('primary')) ltb_type = 'primary';
                    if(row.classList.contains('success')) ltb_type = 'success';
                    if(row.classList.contains('info')) ltb_type = 'info';
                    if(row.classList.contains('secondary')) ltb_type = 'secondary';
                    if(row.classList.contains('danger')) ltb_type = 'danger';
                    if(row.classList.contains('warning')) ltb_type = 'warning';
                    if(row.classList.contains('light')) ltb_type = 'light';
                    if(row.classList.contains('dark')) ltb_type = 'dark';
                    ltb_size = 'normal';
                    if(row.classList.contains('normal')) ltb_size = 'normal';
                    if(row.classList.contains('small')) ltb_size = 'small';
                    if(row.classList.contains('large')) ltb_size = 'large';
                } else {
                    ltb_title = 'This is a link button';
                    ltb_link = 'https://example.com';
                    ltb_type = 'primary';
                    ltb_size = 'normal';
                }
                editor.windowManager.open({
                    title: 'Setting link to button',
                    body: [
                        {
                            type: 'textbox',
                            name: 'ltb_title',
                            label: 'Link text',
                            value: ltb_title
                        },
                        {
                            type: 'textbox',
                            name: 'ltb_link',
                            label: 'Link address',
                            value: ltb_link
                        },
                        {
                            type: 'listbox',
                            name: 'ltb_type',
                            label: 'Style',
                            values: [
                                {
                                    text: 'Primary',
                                    value: 'primary'
                                },
                                {
                                    text: 'Success',
                                    value: 'success'
                                },
                                {
                                    text: 'Info',
                                    value: 'info'
                                },
                                {
                                    text: 'Secondary',
                                    value: 'secondary'
                                },
                                {
                                    text: 'Danger',
                                    value: 'danger'
                                },
                                {
                                    text: 'Warning',
                                    value: 'warning'
                                },
                                {
                                    text: 'Light',
                                    value: 'light'
                                },
                                {
                                    text: 'Dark',
                                    value: 'dark'
                                }
                            ],
                            value: ltb_type
                        },
                        {
                            type: 'listbox',
                            name: 'ltb_size',
                            label: 'Size',
                            values: [
                                {
                                    text: 'Normal',
                                    value: 'normal'
                                },
                                {
                                    text: 'Small',
                                    value: 'small'
                                },
                                {
                                    text: 'Large',
                                    value: 'large'
                                }
                            ],
                            value: ltb_size
                        },
                    ],
                    onsubmit: function(e) {
                        editor.insertContent(
                            '<a class="link_to_button '+e.data.ltb_type+' '+e.data.ltb_size+'" href="'+e.data.ltb_link+'">'+e.data.ltb_title+'</a>'
                        );
                    }
                });

            }
        });
    });
})();