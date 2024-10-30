<?php
/**
 * Plugin Name: Link To Button
 * Plugin URI: https://trinhtuantai.com
 * Description: Add button style to a tag link in tinymce editor like Bootstrap 4 Button
 * Version: 1.1
 * Requires at least: 5.0
 * Requires PHP: 5.4
 * Author: trinhtuantai
 * Author URI: https://trinhtuantai.com/contact
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: link-to-button
 */


add_filter( 'mce_buttons', 'link_to_button_register_buttons' );

function link_to_button_register_buttons( $buttons ) {
   array_push( $buttons, 'separator', 'link_to_button' );
   return $buttons;
}

add_filter( 'mce_external_plugins', 'link_to_button_register_tinymce_javascript' );

function link_to_button_register_tinymce_javascript( $plugin_array ) {
   $plugin_array['link_to_button'] = plugins_url( '/link-to-button.js',__FILE__ );
   return $plugin_array;
}

function link_to_button_add_editor_styles() {
	if ( ! empty( $mce_css ) )
		$mce_css .= ',';

	$mce_css .= plugins_url( 'link-to-button.min.css', __FILE__ );

	return $mce_css;
}
add_filter( 'mce_css', 'link_to_button_add_editor_styles' );

add_action('wp_enqueue_scripts', 'link_to_button_enqueue_scripts');
function link_to_button_enqueue_scripts() {
    wp_register_style('link-to-button', plugins_url( 'link-to-button.min.css', __FILE__ ));
    wp_enqueue_style( 'link-to-button' );
}