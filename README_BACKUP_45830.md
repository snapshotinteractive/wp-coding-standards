# SnapShot Interactive WordPress Coding Standards

  * [Default Platforms and Frameworks](#default-platforms-and-frameworks)
  * [Web Syntax Standards](#web-syntax-standards)
  * [Accessibility](#accessibility)
    * [ARIA Landmark Roles](#aria-landmark-roles)
    * [States and Properties](#states-and-properties)
    * [Accessible Forms](#accessible-forms)
  * [Custom Post Types and Taxonomies](#custom-post-types-and-taxonomies)
    * [When to Use Custom Post Types](#when-to-use-custom-post-types)
    * [What if the CPT Data is only being used on a single page?](#what-if-the-cpt-data-is-only-being-used-on-a-single-page)
    * [Creating Custom Post Types and Taxonomies](#creating-custom-post-types-and-taxonomies)
  * [Advanced Custom Fields](#advanced-custom-fields)
    * [Escaping before output](#escaping-before-output)
  * [Internationalization](#internationalization)
    * [Text Domains](#text-domains)
    * [Escaping Strings](#escaping-strings)
  * [Plugins](#plugins)
    * [When to Use Plugins](#when-to-use-plugins)
    * [Vetted Plugins](#vetted-plugins)
  * [Theme Structure](#theme-structure)
  * [Modular PHP](#modular-php)
  * [Credits](#credits)
  * [Contributing](#contributing)

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

## Accessibility

It’s important that our clients and their customers are able to use the products that we create for them. Accessibility means creating a web that is accessible to all people: those with disabilities and those without. We must think about people with visual, auditory, physical, speech, cognitive and neurological disabilities, and ensure that we deliver the best experience we possibly can to everyone. Accessibility best practices also make content more easily digestible by search engines. Increasingly, basic accessibility can even be a legal requirement. In all cases, an accessible web benefits everyone.

At minimum, every SnapShot project should make use of ARIA Landmark roles, semantic headings, and support for alt text on images. Compliance with Section 508, or other international accessibility laws and guidelines, may be required depending on the project.

We draw much of our information from two prominent accessibility guides: WCAG (Web Content Accessibility Guidelines) and Section 508.

### ARIA Landmark Roles

ARIA (Assistive Rich Internet Applications) is a spec from the W3C. It was created to improve accessibility of applications by providing extra information to screen readers via HTML attributes. Screen readers can already read HTML, but ARIA can help add context to content and make it easier for screen readers to interact with content.

ARIA is a descriptive layer on top of HTML to be used by screen readers. It has no effect on how elements are displayed or behave in browsers. We use these ARIA Landmark Roles (banner, navigation, main, etc.) to provide a better experience to users with disabilities.

That being said: let's not abuse ARIA. A pure semantic HTML5 solution without ARIA is always preferred. This way all devices interacting with the web page or app understand the meaning of this element.

```html
// Bad:
<div role="button" tabindex="0">text</div>

// Redundant:
<button role="button">text</button>

// Good:
<button>text</button>
```

The following HTML5 elements do not require their most-used ARIA roles in most cases:

```html
// Old:
<article role="article">
<aside role="complementary">
<footer role="contentinfo">
<header role="banner">
<main role="main">
<nav role="navigation">
<section role="region">

// New:
<article>
<aside>
<footer> (if not within an article or section element)
<header> (if not within an article or section element)
<main>
<nav>
<section>
```

### States and Properties

ARIA also allows us to describe certain inherent properties of elements, as well as their various states. Imagine you’ve designed a site where the main content area is split into three tabs. When the user first visits the site, the first tab will be the primary one, but how does a screen reader get to the second tab? How does it know which tab is active? How does it know which element is a tab in the first place?

ARIA attributes can be added dynamically with JavaScript to help add context to your content. Thinking about the tabbed content example, it might look something like this:

```html
<ul role="tablist">
    <li role="presentation">
        <a href="#first-tab" role="tab" aria-selected="true" id="tab-panel-1">Panel 1</a>
    </li>
    <li role="presentation">
        <a href="#second-tab" role="tab" aria-selected="false" id="tab-panel-2">Panel 2</a>
    </li>
</ul>

<div role="tabpanel" aria-hidden="false" aria-labelledby="tab-panel-1">
    <h2 id="first-tab">Tab Panel Heading</h2>
</div>

<div role="tabpanel" aria-hidden="true" aria-labelledby="tab-panel-2">
    <h2 id="second-tab">Second Tab Panel Heading</h2>
</div>
```

You can see how effortless it is to make our tabbed interface accessible to screen readers. All we need to do is add context.

### Accessible Forms

Forms are one of the biggest areas of failure when it comes to accessibility. Fortunately, there are a few key things that we can do to ensure they meet accessibility standards.

Each form field should have its own `<label>`. The label tag, along with the for attribute, can help explicitly associate a label to a form element adding readability to the form element for screen readers.

Form elements should also be logically grouped using the `<fieldset>` tag. Grouped form elements can be helpful for people who depend on screen readers or those with cognitive disabilities.

Finally, we should ensure that all interactive elements are keyboard (or tab) navigable, providing easy use for people with vision or mobility disabilities. In general, the tab order should be dictated by a logical source order of elements. If you feel the need to change the tab order of certain elements, it likely indicates that you should rework the markup to flow in a logical order.

Adding `tabindex` to elements to force a different tab order can become confusing to users and a maintenance issue to developers if/when they have to make changes to the markup. There are cases, however, when we need to add or remove certain elements from the tab order. In these cases, set `tabindex="0"` to allow an element (e.g. a `<div>`) to receive focus in its natural order, or set `tabindex="-1"` to skip an element (e.g. a modal dialog box).

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

A good use case here is if you have a design for a staff directory page, and when you click on a staff member's headshot you are directed to a bio page. This bio page might have the staff member's name, job title, email address, and various social media profile links in addition to his or her full bio. Cramming all of that into the WordPress editor and adding various `span` tags with assigned classes for formatting makes it really easy for a client or less keen developer to accidentally overwrite or erase your formatting in the future. In this instance, you'd likely have created a custom post type for `staff` and we'd suggest having unique custom fields for `job_title`, `email`, `facebook`, and `twitter`. Then in the template file, retrieving this content is as easy as using `get_field()` (if you are returning a large number of custom fields, we suggest using `get_post_meta()` instead of `get_field()` as it is significantly more performant).

In some instances, you need editable content on archive pages, or global content such as the site's header or footer. In these instances you can either create WordPress widgets or use [ACF's options page](https://www.advancedcustomfields.com/resources/options-page/) to easily access and edit content.

For more information on how to use ACF, see its [documentation](https://www.advancedcustomfields.com/resources/).

### Escaping before output

The ACF native functions `get_field()` and `the_field()` simply return exactly what is in the database. To prevent formatting issues and improve security of the site, you should always wrap your output functions in the appropriate escaping function. For example, instead of using:

```php
echo get_field('text');
```
<<<<<<< HEAD

=======
    
>>>>>>> 9a79baa6598950965354b1d95aa6fd6534b5d704
... or:

```php
the_field('text');
```
<<<<<<< HEAD

=======
    
>>>>>>> 9a79baa6598950965354b1d95aa6fd6534b5d704
Always use:

```php
echo esc_html( get_field('text') );
```
<<<<<<< HEAD

=======
    
>>>>>>> 9a79baa6598950965354b1d95aa6fd6534b5d704
... or another escaping function that is suitable for the situation. For escaping WYSIWYG fields where you want to preserve user formatting, you can use:

```php
echo wp_kses_post( get_field('editor') );
```

In addition to escaping, it can also be a good idea to validate and sanitize user input data before printing it to the screen. For more information on validation, sanitation and escaping, see [the WordPress Codex](https://codex.wordpress.org/Validating_Sanitizing_and_Escaping_User_Data).

## Internationalization

All text strings in a project should be internationalized using core localization functions. Even if the project does not currently dictate a need for translatable strings, this practice ensures translation-readiness should a future need arise.

WordPress provides a myriad of localization functionality. Engineers should familiarize themselves with features such as pluralization and disambiguation so translations are flexible and translators have the information they need to work accurately.

Samuel Wood (Otto) put together a guide to WordPress internationalization best practices, and engineers should take time to familiarize themselves with its guidance: [Internationalization: You’re probably doing it wrong](http://ottopress.com/2012/internationalization-youre-probably-doing-it-wrong/).

It’s important to note that the strings passed to translation functions should always be literal strings, never variables or named constants, and code shouldn’t use string interpolation to inject values into either string. Most tools used to create translations rely on GNU gettext scanning source code for translation functions. PHP code won’t be interpreted, only scanned like it was a block of plain text and stored similarly. If WordPress’s translation APIs can’t find an exact match for a string inside the translation files, it won’t be able to translate the string. Instead, use `printf` formatting codes inside the string to be translated and pass the translated version of that string to `sprintf()` to fill in the values.

For example:

```php
<?php
// This will confuse translation software
$string = __( "$number minutes left", 'plugin-domain' );
// So will this
define( 'MINUTES_LEFT', '%d minutes left' );
$string = __( MINUTES_LEFT, 'plugin-domain' );
<<<<<<< HEAD
// Correct way to do a simple translation
=======
// Correct way to do a simple translation 
>>>>>>> 9a79baa6598950965354b1d95aa6fd6534b5d704
$string = sprintf( __( '%d minutes left', 'plugin-domain' ), $number );
// A more complex translation using _n() for plurals
$string = sprintf( _n( '%d minute left', '%d minutes left',  $number, 'plugin-domain' ), $number );
?>
```

Localizing a project differs from the core approach in two distinct ways:

* A unique text domain should be used with all localization functions
* Internationalized output should always be escaped

### Text Domains

Each project should leverage a unique text domain for its strings. Text domains should be lowercase, alphanumeric, and use hyphens to separate multiple words: `ssi-project-name`.

Like the translated strings they accompany, text domains should never be stored in a variable or named constant when used with core localization functions, as this practice can often produce unexpected results. Translation tools won’t interpret PHP code, only scan it like it was plain text. They won’t be able to assign the text domain correctly if it’s not there in plain text.

```php
<?php
// Always this
$string = __( 'Hello World', 'plugin-domain' );
// Never this
$string = __( 'Hello World', $plugin_domain );
// Or this
define( 'PLUGIN_DOMAIN', 'plugin-domain' );
$string = __( 'Hello World', PLUGIN_DOMAIN );
?>
```

If the code is for release as a plugin or theme in the WordPress.org repositories, the text domain must match the directory slug for the project in order to ensure compatibility with the WordPress language pack delivery system. The text domain should be defined in the “Text Domain” header in the plugin or stylesheet headers, respectively, so the community can use GlotPress to provide new translations.

### Escaping Strings

Most of WordPress’s translation functions don’t escape output by default. So, it’s important to escape the translated strings like any other content.

To make this easier, the WordPress API includes functions that translate and escape in a single step. Developers are encouraged to use these functions to simplify their code:

For use in HTML

* `esc_html__()`: Returns a translated and escaped string ([link](https://developer.wordpress.org/reference/functions/esc_html__/))
* `esc_html_e()`: Echoes a translated and escaped string ([link](https://developer.wordpress.org/reference/functions/esc_html_e/))
* `esc_html_x()`: Returns a translated and escaped string, passing a context to the translation function ([link](https://developer.wordpress.org/reference/functions/esc_html_x/))

For use in attributes

* `esc_attr__()`: Returns a translated and escaped string ([link](https://developer.wordpress.org/reference/functions/esc_attr__/))
* `esc_attr_e()`: Echoes a translated and escaped string ([link](https://developer.wordpress.org/reference/functions/esc_attr_e/))
* `esc_attr_x()`: Returns a translated and escaped string, passing a context to the translation function ([link](https://developer.wordpress.org/reference/functions/esc_attr_x/))

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
<<<<<<< HEAD

=======
    
>>>>>>> 9a79baa6598950965354b1d95aa6fd6534b5d704
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

## Credits

Some of the content in this document has been adapted from [10up's](https://10up.com) [Engineering Best Practices](https://10up.github.io/Engineering-Best-Practices/) and [Human Made's](https://hmn.md/) [Style Guide](https://engineering.hmn.md/how-we-work/style/).

## Contributing

Please contribute via pull requests on [GitHub](https://github.com/snapshotinteractive/wp-coding-standards).
