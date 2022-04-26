<?php
if ( ! function_exists( 'dewynters_setup' ) ) {

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
     * @package Dewynters Headless 
	 */
    function dewynters_setup() {

		// Enable post thumbnails for pages
        add_theme_support( 'post-thumbnails', array( 'page', 'post', 'player' ) );

		// Add default posts RSS feed links to head
		//add_theme_support( 'automatic-feed-links' );

		//Let WordPress manage the document title.
		add_theme_support( 'title-tag' );

		// This theme uses wp_nav_menu() in two locations.
		register_nav_menus( array(
		    'primary'       => 'Primary',
            'primary-full'  => 'Primary Full',
            'primary-full-sub'  => 'Primary Full Sub',
            'footer1'      => 'Footer 1',
            'footer2'      => 'Footer 2',
            'footer3'      => 'Footer 3',
            'footer4'      => 'Footer 4'
        ) );

        // Add custom image sizes based on bootstrap breakpoints
        // 0 for auto height
        add_image_size( 'imagesize_xxxl', 1920, 0, true );
        add_image_size( 'imagesize_xxl', 1600, 0 );
        add_image_size( 'imagesize_xl', 1200, 0 );
        add_image_size( 'imagesize_lg', 992, 0 );
        add_image_size( 'imagesize_md', 768, 0 );
        add_image_size( 'imagesize_sm', 576, 0 );

        add_image_size( 'featured_image_45', 460, 575, true );
	}
}
add_action( 'after_setup_theme', 'dewynters_setup' );

/**
 * Backend: remove the 'My Apps Passwords' submenu added by 'WP Google Authenticator' plugin.
 *
 * @package Dewynters Headless 
 */
function dewynters_admin_menu()
{

    //remove posts
    //remove_menu_page('edit.php');

    //remove the 'My Apps Passwords' submenu added by 'WP Google Authenticator' plugin.
    remove_submenu_page( 'users.php', 'wpga_apps_passwords' );

}
add_action('admin_menu', 'dewynters_admin_menu');


function dcwd_youtube_wrapper( $html, $url, $attr, $post_ID ) {
	$classes[] = 'embed-responsive embed-responsive-16by9';
    return '<div class="' . implode( ' ', $classes ) . '">' . $html . '</div>';
}
add_filter( 'embed_oembed_html', 'iframe_wrapper', 10, 4 );


function my_prefix_add_rest_orderby_params( $params ) {
    $params['orderby']['enum'][] = 'menu_order';

    return $params;
}
add_filter( 'rest_post_collection_params', 'my_prefix_add_rest_orderby_params', 10, 1 );

// remove yoast taxonmy error
add_filter( 'wpseo_primary_term_taxonomies', '__return_empty_array' );

// hide posts as not using
function remove_menu_items() {
    remove_menu_page('edit.php'); // Posts
    remove_menu_page('edit.php?post_type=action_monitor'); // action_monitor
}
add_action( 'admin_menu', 'remove_menu_items' );

function wpse_custom_menu_order( $menu_ord ) {
    if ( !$menu_ord ) return true;

    return array(
        'index.php', // Dashboard
        'separator1', // First separator
        'upload.php', // Media
        'edit.php?post_type=page', // Pages
        'edit.php?post_type=news', // news
        'edit.php?post_type=thingstodo',
        'edit.php?post_type=theresmore', 
        'edit.php?post_type=sidebarblocks', 
        'separator2', // Second separator
        'themes.php', // Appearance
        'plugins.php', // Plugins
        'users.php', // Users
        'tools.php', // Tools
        'options-general.php', // Settings
        'separator-last', // Last separator
    );
}
add_filter( 'custom_menu_order', 'wpse_custom_menu_order', 10, 1 );
add_filter( 'menu_order', 'wpse_custom_menu_order', 10, 1 );

// shove YOAST settings panel in editor to bottom 
add_filter( 'wpseo_metabox_prio', function() { return 'low'; } );

// Remove home from breadcrumbs
function wpseo_remove_home_breadcrumb($links) { 
    if ( $links[0]['url'] == home_url('/') ) { 
        array_shift($links); 
    } 
    
    return $links; 
} 
add_filter('wpseo_breadcrumb_links', 'wpseo_remove_home_breadcrumb');

add_action( 'admin_bar_menu', 'customize_my_wp_admin_bar', 80 );
function customize_my_wp_admin_bar( $wp_admin_bar ) {

    $url = get_field('frontend_url', 'options');
    $site_node = $wp_admin_bar->get_node('site-name');
    $view_site_node = $wp_admin_bar->get_node('view-site');

    if ($url) {
        //Change link
        $site_node->href = $url;
        $view_site_node->href = $url;
    }

    //Update Node.
    $wp_admin_bar->add_node($site_node);
    $wp_admin_bar->add_node($view_site_node);
}


// Allow editors to see Appearance menu
$role_object = get_role( 'editor' );
$role_object->add_cap( 'edit_theme_options' );
function hide_menu() {
 
    // Hide theme selection page
    remove_submenu_page( 'themes.php', 'themes.php' );
 
    // Hide widgets page
    remove_submenu_page( 'themes.php', 'widgets.php' );
 
    // Hide customize page
    global $submenu;
    unset($submenu['themes.php'][6]);
 
}
 
add_action('admin_head', 'hide_menu');