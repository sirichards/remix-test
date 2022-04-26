<?php
/**
 * atp Cup functions and definitions
 *
 * @package Taste 2021
 * @package Dewynters Headless 
 */

/** Custom vars */
define( 'CMS_DOMAIN', get_field('cms_url', 'options') );
define( 'PREVIEW_URL', get_field('preview_url', 'options') );
define( 'FRONTEND_URL', get_field('frontend_url', 'options') );

require_once(__DIR__.'/functions/func-admin.php');
require_once(__DIR__.'/functions/func-setup.php');
require_once(__DIR__.'/functions/func-disable-comments.php');
require_once(__DIR__.'/functions/func-acf.php');
require_once(__DIR__.'/functions/func-build.php');
require_once(__DIR__.'/functions/func-news.php');


/**
 * create custom post types
 *
 * @package Dewynters Headless 
 */

require_once(__DIR__.'/lib/cpt/news/core.php');
require_once(__DIR__.'/lib/cpt/sidebar-blocks/core.php');