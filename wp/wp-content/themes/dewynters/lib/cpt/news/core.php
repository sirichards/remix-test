<?php
if ( $_SERVER['SCRIPT_FILENAME'] == __FILE__ ) {
	die("Access denied.");
}

if ( !class_exists('News') ) {

	/**
	 * A class that adds a cpt for News
	 *
     * @package Taste 2021
     * @since Dewynters 2020 1.0
	 */
    class News
	{
		const VERSION		= '1.0';
		const POST_TYPE		= 'news';
		const TAXONOMY		= 'news-categories';

		/**
		 * Constructor
		 */
		public function __construct()
		{
			// Register actions
		    add_action('init', array( $this, 'createPostType') );
		}

		/**
		 * Registers the custom post type
		 */
		public function createPostType()
		{
	
		    //Registers the category taxonomy
		    if ( !taxonomy_exists( self::TAXONOMY ) ) {
		        register_taxonomy(
		            self::TAXONOMY,
		            self::POST_TYPE,
		            array(
		                'label'					=> 'Category',
		                'labels'				=> array( 'name' => 'Categories', 'singular_name' => 'Category' ),
		                'hierarchical'			=> true,
		                'public'				=> true,
		                'show_in_rest'          => true,
						'update_count_callback'	=> '_update_post_term_count',
						'show_in_graphql'   => true,
						'graphql_single_name' => 'newsCategory',
      					'graphql_plural_name' => 'newsCategories'
		            )
		        );
		    }

			if ( !post_type_exists( self::POST_TYPE ) ) {
				$labels = array(
					'name'					=> __( 'News'),
					'singular_name'			=> __( 'News' ),
					'add_new'				=> __( 'Add New News' ),
					'add_new_item'			=> __( 'Add New News' ),
					'edit'					=> __( 'Edit News' ),
					'edit_item'				=> __( 'Edit News' ),
					'new_item'				=> __( 'Add New News' ),
					'view'					=> __( 'View News' ),
					'view_item'				=> __( 'View News' ),
					'search_items'			=> __( 'Search News' ),
					'not_found'				=> __( 'No entries found' ),
					'not_found_in_trash'	=> __( 'No entries found in Trash' )
				);

				register_post_type(
					self::POST_TYPE,
					array(
						'labels'			=> $labels,
						'singular_label'	=> 'News',
						'public'			=> true,
					    'exclude_from_search' => false,
					    'has_archive' 		=> true,
						'menu_position'		=> 50,
					    'hierarchical'		=> false,
					    'publicly_queryable'=> true,
					    'menu_icon'			=> 'dashicons-admin-post',
					    'rewrite'			=> array('slug' => 'blog', 'with_front' => false),
					    'supports'			=> array('title','editor','thumbnail','revisions'),
						'show_in_rest'      => true,
						'show_in_graphql'   => true,
						'graphql_single_name' => 'newsArticle',
      					'graphql_plural_name' => 'newsArticles'
					)
				);
			}
		}
		
    } // end News

	//create an instance of the class
	if ( class_exists('News') ) {
	    $News = new News();
	}
}
