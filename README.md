# SnapShot Interactive WordPress Coding Standards

  * [Default Platforms and Frameworks](#default-platforms-and-frameworks)
  * [Web Syntax Standards](#web-syntax-standards)
  * [Custom Post Types and Taxonomies](#custom-post-types-and-taxonomies)
    * [When to Use Custom Post Types](#when-to-use-custom-post-types)
    * [What if the CPT Data is only being used on a single page?](#what-if-the-cpt-data-is-only-being-used-on-a-single-page)
    * [Creating Custom Post Types and Taxonomies](#creating-custom-post-types-and-taxonomies)
  * [Advanced Custom Fields](#advanced-custom-fields)
  * [Plugins](#plugins)
    * [When to Use Plugins](#when-to-use-plugins)
    * [Vetted Plugins](#vetted-plugins)
  * [Theme Structure](#theme-structure)
  * [Modular PHP](#modular-php)

## Default Platforms and Frameworks

*   Latest WordPress Version (required) [http://wordpress.org](http://wordpress.org)
*   Foundation 6.4 (required) [https://foundation.zurb.com/sites/docs](https://foundation.zurb.com/sites/docs)
*   Slick Carousel [http://kenwheeler.github.io/slick](http://kenwheeler.github.io/slick) (for sliders and carousels)
*   Lity [https://sorgalla.com/lity](https://sorgalla.com/lity) (for simple video modals)
*   fancyBox3 [http://fancyapps.com/fancybox/3](http://fancyapps.com/fancybox/3) (for more functionality with your video/photo modals)
*   SlickNav (mobile navigation creation) [http://slicknav.com](http://slicknav.com) (or Foundation's topbar nav)
*   HTML5
*   CSS3
*   Browser Support (required)
    *   IE 10+
    *   Firefox
    *   Chrome
    *   iPhone / Android
    *   iPad / Android Tablet

## Web Syntax Standards

**NOTE: This section is under construction and reconsideration. For the moment, please stick to WordPress coding and syntax standard for HTML, PHP and JavaScript. Use a simple, clean CSS syntax that works for you, but keep legibility, modularity and maintainability at top of mind.**

*   **PHP:** WordPress PHP Standards: [https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/](https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/)
*   **CSS:** WordPress CSS Standards: [https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/](https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/)
*   **HTML:** WordPress HTML Standards: [https://make.wordpress.org/core/handbook/best-practices/coding-standards/html/](https://make.wordpress.org/core/handbook/best-practices/coding-standards/html/)
*   **JavaScript:** WordPress JS Standards: [https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/](https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/)

## Custom Post Types and Taxonomies

### When to Use Custom Post Types

Custom post types are used for specific information that doesn’t fall under your typical POSTS or PAGES. If a website has Articles but no Blog, use Posts for articles, if there is both Articles and a Blog, use POSTS for the Blog and create a Custom Post Type for Articles. The same applies for the category taxonomy; if you’re creating a custom post type and it has categories as well it makes sense to create a custom taxonomy that goes along with it. Ex: Article Categories.

The ultimate goal of using Custom Post Types is to create ease of use for the client. A Custom Post Type puts the data front and center (left admin navigation) for the user so they can update it easily. For example if a client has a Board of Directors section; it would make sense to have a board of directors custom post type and using advanced custom fields pro (listed in plugins section) to create all the additional fields needed.

### What if the CPT Data is only being used on a single page?

Some times you’ll have information that doesn’t need to be shared across the entire site and is only specific to a single page. You can use Advanced Custom Fields to create repeater fields applied to a specific template or page to create a list to loop through.

[http://www.advancedcustomfields.com/resources/repeater/](http://www.advancedcustomfields.com/resources/repeater/)

### Creating Custom Post Types and Taxonomies

You can visit [https://generatewp.com](https://generatewp.com) to help build the scaffold for custom post types and taxonomies.

WP-CLI can also be used

## Advanced Custom Fields

The general rule of thumb is that all content on every page or post should be easily manageable by the client once a build is complete. In many cases we can achieve this by simply using the WordPress content editor, the post thumbnail, or post/taxonomy queries to find the content we need from content areas that are already built into WordPress. However, for custom sites this is often insufficient, and we rule out page builder plugins because of their overhead and general clunkiness.

You may be tempted to hardcode certain HTML elements into a template because you can't figure out how to work it into the editor, and creating custom metaboxes is a headache. [Advanced Custom Fields Pro (ACF)](https://www.advancedcustomfields.com/resources/) is our solution for this. You can create any number of field configurations easily through ACF and assign them to specific page templates, post types, taxonomies, widgets, and much more.

A good use case here is if you have a design for a staff directory page, and when you click on a staff member's headshot you are directed to a bio page. This bio page might have the staff member's name, job title, email address, and various social media profile links in addition to his or her full bio. Cramming all of that into the WordPress editor and adding various `span` tags with assigned classes for formatting makes it really easy for a client or less keen developer to accidentally overwrite or erase your formatting in the future. In this instance, you'd likely have created a custom post type for `staff` and we'd suggest having unique custom fields for `job_title`, `email`, `facebook`, and `twitter`. Then in the template file, retrieving this content is as easy as using `get_field()`.

In some instances, you need editable content on archive pages, or global content such as the site's header or footer. In these instances you can either create WordPress widgets or use [ACF's options page](https://www.advancedcustomfields.com/resources/options-page/) to easily access and edit content.

For more information on how to use ACF, see its [documentation](https://www.advancedcustomfields.com/resources/).

## Plugins

### When to Use Plugins

Below are the main plugins that SnapShot Interactive uses in most Wordpress websites. Others are added from time to time on an as needed basis but the ones below should cover 90-100% of what is needed from a basic wordpress site.

**Freelancers/Developer partners must receive written authorization before installing or using any third-party plugins on SnapShot websites that are not included on this list.**

### Vetted Plugins

<table>

<thead>

<tr>

<th>Plugin</th>

<th>Use</th>

</tr>

</thead>

<tbody>

<tr>

<td>Advanced Custom Fields Pro (installed on all sites)</td>

<td>Custom fields for backend. Create ability to add custom fields to templates pages to create a better user experience for clients when entering specific information. Requires a license key (request access from anyone on the dev team)</td>

</tr>

<tr>

<td>Contact Form 7</td>

<td>Create custom email forms</td>

</tr>

<tr>

<td>Flamingo</td>

<td>Stores CF7 form submissions in the database</td>

</tr>

<tr>

<td>SendGrid</td>

<td>SMTP mailer. Requires integration with our SSI SendGrid account.</td>

</tr>

<tr>

<td>Yoast SEO</td>

<td>SEO Plugin / Standard</td>

</tr>

<tr>

<td>Breadcrumb NavXT</td>

<td>Creates breadcrumb navigations</td>

</tr>

<tr>

<td>Advanced Access Manager</td>

<td>Manage User and Role Access to WordPress Backend and Frontend.</td>

</tr>

<tr>

<td>SafeSVG</td>

<td>Properly sanitizes SVG files for use in the media library as an acceptable image format.</td>

</tr>

<tr>

<td>Post Types Order</td>

<td>Drag and drop custom post type orders</td>

</tr>

</tbody>

</table>

## Theme Structure

Use the following project structure for custom theme development. The SnapShot basetheme already reflects this structure with the exception of Node, Sass, or compiled files (we do not currently have an official process for using such tools or deployment, but we've included a structure for them below for guidance in the event that we do use them from time to time when appropriate). These directories are noted with an asterisk `*`.

**Freelancers/Developer partners must obtain written permission before using Sass or other NPM build tools on any SnapShot sites**

    |- acf-json/ _____________________________ # Enables Advanced Custom Fields local JSON field settings (https://www.advancedcustomfields.com/resources/local-json/)
    |- assets/
    |  |- img/ _______________________________ # Theme images
    |  |- fonts/ _____________________________ # Custom/hosted fonts
    |  |- js/
    |    |- src/ * ___________________________ # Source JavaScript files (separate for modularity when using a compiler, but neglect this folder and use app.js for all theme scripts otherwise)
    |    |- app.js ___________________________ # Theme scripts (if using a compiler, this is your unminified compiled script file)
    |    |- app.min.js * _____________________ # Minified JavaScript (when using a compiler)
    |  |- css/
    |    |- scss/ * __________________________ # (when appripriate - See below for details)
    |    |- app.css __________________________ # User-facing theme styles (unminified compiled CSS when using Sass)
    |    |- app.min.css * ____________________ # Minified compiled CSS when using Sass (when appropriate)
    |    |- login.css ________________________ # Styles for the wp-login.php page
    |    |- layout.min.css * _________________ # Minified login styles when using Sass (when appropriate)
    |    |- admin.css ________________________ # Styles for the WordPress Dashboard area (rarely needed, but just in case)
    |    |- admin.min.css * __________________ # Compiled dashboard styles when using Sass (when appripriate)
    |    |- editor.css _______________________ # Editor styles (rarely needed, but just in case)
    |- bower_components/ * ___________________ # Frontend dependencies (when apprpriate)
    |- inc/ __________________________________ # PHP classes and function files
    |  |- classes/ ___________________________ # PHP classes
    |  |- post-types/ ________________________ # PHP files registering and managing custom post types (as needed)
    |  |- taxonomies/ ________________________ # PHP files registering and managing custom taxonomies (as needed)
    |- languages/ ____________________________ # Translations
    |- lib/ __________________________________ # Composer dependencies / third party libraries
    |- node_modules/ * _______________________ # npm modules (when appropriate)
    |- page-templates/ _______________________ # Page and post templates
    |- partials/ _____________________________ # Template parts

When using Sass, the `scss` folder should be organized further into component directories as outlined below:

    |- assets/css/scss/
    |  |- _vendor/ ___________________________ # Third party Sass libraries (Bourbon, Foundation, FontAwesome, etc.)
    |  |- admin/ _____________________________ # Admin specific partials
    |  |- base/
    |    |- reset, normalize, or sanitize
    |    |- wordpress ________________________ # Partial for WordPress default classes
    |  |- components/
    |    |- buttons
    |    |- callouts
    |    |- toggles
    |    |- all other modular reusable UI components
    |  |- editor/ ____________________________ # Editor specific partials (leverage placeholders to use in front-end and admin area)
    |  |- global/ ____________________________ # Functions, mixins, placeholders, and variables
    |  |- layout/
    |    |- header
    |    |- footer
    |    |- sidebar
    |  |- templates/
    |    |- home page
    |    |- single
    |    |- archives
    |    |- blog
    |    |- all page, post, and custom post type specific styles
    |  |- typography/
    |  |- admin.scss
    |  |- app.scss
    |  |- editor.scss
    
In addition to theme files, we suggest using [`EditorConfig`](http://editorconfig.org/) so that, regardless of what IDE or text editor you choose, syntax and formatting are consistent from project to project and developer to developer. You would create an `.editorconfig` file in the root of the project that looks like this:

```
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[{.jshintrc,*.json,*.yml}]
indent_style = space
indent_size = 2

[{*.txt,wp-config-sample.php}]
end_of_line = crlf

[*.md]
trim_trailing_whitespace = false
```

## Modular PHP

In the spirit of building maintainable, modular code, try not to write PHP directly in `functions.php`. Break functions into groups that make logical sense, store them in the `inc` directory, and use `require_once` to load them in your theme. An example `functions.php` file would look something like this:

```php
<?php
/**
 * Theme setup.
 */
require_once get_template_directory() . '/inc/functions-setup.php';

/**
 * Register custom post types.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
require_once get_template_directory() . '/inc/functions-post-types.php';

/**
 * Register navigation menus.
 */
require_once get_template_directory() . '/inc/functions-nav.php';

/**
 * Enqueue scripts and styles.
 */
require_once get_template_directory() . '/inc/functions-scripts.php';

/**
 * Layout functions.
 */
require_once get_template_directory() . '/inc/functions-layout.php';
```

Two examples of code that can be easily reused from project to project are custom post types and taxonomies. You can build those modularly, too, by using <a href="http://php.net/manual/en/class.directoryiterator.php" target="_blank">`DirectoryIterator`</a> to iterate through respective directories and load all of the php files it finds:

```php
<?php
// Define directories for post types and taxonomies
$directories = array(
    'post_types'  => get_template_directory() . '/inc/post-types/',
    'taxonomies'  => get_template_directory() . '/inc/taxonomies/'
);

foreach ( $directories as $key => $directory ) {
    $dir = new DirectoryIterator( $directory );

    foreach ( $dir as $fileinfo ) {
        if ( ! $fileinfo->isDot() ) {
            require $directory . $fileinfo->getFilename();
        }
    }
}
```
