<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Admin;

use TemplateMarket\Admin\AdminMenu;
use TemplateMarket\Utils\Singleton;

class Admin {
    use Singleton;

    public function setup() {
        AdminMenu::initialize();
    }
}
