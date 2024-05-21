<?php
/**
 * @author  wpWax
 * @since   1.0
 * @version 1.0
 */
?>

<?php get_header();?>

<div id="page" class="site tmp_dir_custom_add_listing_page page-id-<?php echo $tmp_dir_custom_page_id; ?>">

    <?php
    $content = get_the_content( null, null, $tmp_dir_custom_page_id );
    echo apply_filters( 'the_content', $content );
    ?>

</div>

<?php get_footer();?>