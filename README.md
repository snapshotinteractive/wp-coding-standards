# SnapShot Interactive WordPress Development Standards

## Default Platforms / Frameworks

*   Latest WordPress Version (required) [http://wordpress.org](http://wordpress.org)
*   Foundation 6.4 (required) [https://foundation.zurb.com/sites/docs](https://foundation.zurb.com/sites/docs)
*   Slick Carousel [http://kenwheeler.github.io/slick](http://kenwheeler.github.io/slick) (for sliders and carousels)
*   Lity [https://sorgalla.com/lity](https://sorgalla.com/lity) (for simple video modals)
*   fanceyBox3 [http://fancyapps.com/fancybox/3](http://fancyapps.com/fancybox/3) (for more functionality with your video/photo modals)
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

## Custom Post Types / Taxonomies

### When to Use Custom Post Types

Custom post types are used for specific information that doesn’t fall under your typical POSTS or PAGES. If a website has Articles but no Blog, use Posts for articles, if there is both Articles and a Blog, use POSTS for the Blog and create a Custom Post Type for Articles. The same applies for the category taxonomy; if you’re creating a custom post type and it has categories as well it makes sense to create a custom taxonomy that goes along with it. Ex: Article Categories.

The ultimate goal of using Custom Post Types is to create ease of use for the client. A Custom Post Type puts the data front and center (left admin navigation) for the user so they can update it easily. For example if a client has a Board of Directors section; it would make sense to have a board of directors custom post type and using advanced custom fields pro (listed in plugins section) to create all the additional fields needed.

#### What if the CPT Data is only being used on a single page?

Some times you’ll have information that doesn’t need to be shared across the entire site and is only specific to a single page. You can use Advanced Custom Fields to create repeater fields applied to a specific template or page to create a list to loop through.

[http://www.advancedcustomfields.com/resources/repeater/](http://www.advancedcustomfields.com/resources/repeater/)

### Creating Custom Post Types / Taxonomies

You can visit [https://generatewp.com](https://generatewp.com) to help build the scaffold for custom post types and taxonomies.

WP-CLI can also be used

## Plugins

### When to Use Plugins

Below are the main plugins that SnapShot Interactive uses in most Wordpress websites. Others are added from time to time on an as needed basis but the ones below should cover 90-100% of what is needed from a basic wordpress site.

**Vetted Plugins**

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
