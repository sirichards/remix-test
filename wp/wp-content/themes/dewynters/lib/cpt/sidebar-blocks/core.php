<?php
if ( $_SERVER['SCRIPT_FILENAME'] == __FILE__ ) {
	die("Access denied.");
}

if ( !class_exists('SidebarBlocks') ) {

	/**
	 * A class that adds a cpt for Players
	 *
     * @package Taste 2021
     * @since Dewynters 2020 1.0
	 */
    class SidebarBlocks
	{
		const VERSION		= '1.0';
		const POST_TYPE		= 'sidebarblocks';

		/**
		 * Constructor
		 */
		public function __construct()
		{
			// Register actions
		    add_action('init',							      array( $this, 'createPostType') );
		    
		    add_filter('use_block_editor_for_post_type',      array( $this, 'disableGutenberg'), 10, 2);
		}

		/**
		 * Registers the custom post type
		 */
		public function createPostType()
		{

			if ( !post_type_exists( self::POST_TYPE ) ) {
				$labels = array(
					'name'					=> __( 'Sidebar blocks'),
					'singular_name'			=> __( 'Sidebar block' ),
					'add_new'				=> __( 'Add New Sidebar block' ),
					'add_new_item'			=> __( 'Add New Sidebar block' ),
					'edit'					=> __( 'Edit Sidebar block' ),
					'edit_item'				=> __( 'Edit Sidebar block' ),
					'new_item'				=> __( 'Add New Sidebar block' ),
					'view'					=> __( 'View Sidebar block' ),
					'view_item'				=> __( 'View Sidebar block' ),
					'search_items'			=> __( 'Search Sidebar blocks' ),
					'not_found'				=> __( 'No entries found' ),
					'not_found_in_trash'	=> __( 'No entries found in Trash' )
				);

				register_post_type(
					self::POST_TYPE,
					array(
						'labels'			=> $labels,
						'singular_label'	=> 'Sidebar blocks',
					    'exclude_from_search' => false,
					    'has_archive' 		=> false,
						'menu_position'		=> 50,
					    'hierarchical'		=> false,
					    'publicly_queryable'=> false,
					    'public'			=> true,
					    'menu_icon'			=> 'dashicons-align-left',
					    'rewrite'			=> array('slug' => 'sidebarblock', 'with_front' => false),
					    'supports'			=> array('title','editor','thumbnail','revisions'),
					    'show_in_rest'      => true,
						'show_in_graphql'   => true,
						'graphql_single_name' => 'sidebarBlock',
      					'graphql_plural_name' => 'sidebarBlocks'
					)
				);
			}
		}

		/**
		 * Gets the published entries from the database
		 * @param mixed $categories null for all, or an array with category slugs to include only those categories
		 * @return array
		 */
		public static function getEntries($args = array())
		{
			$args['post_type'] = self::POST_TYPE;

			if (!isset($args['numberposts'])) {
				$args['numberposts'] = -1;//all posts
			}

			return get_posts( $args );
		}
		
		
		/**
		 * Disable the Gutenberg editor for news, since we use our own flexible content
		 */
		function disableGutenberg($current_status, $post_type)
		{
		    if ($post_type === self::POST_TYPE) return false;
		    return $current_status;
		}
		

    } // end Player

	//create an instance of the class
	if ( class_exists('SidebarBlocks') ) {
	    $sidebarBlocks = new SidebarBlocks();
	}
}
