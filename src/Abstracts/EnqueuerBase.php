<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace TemplateMarket\Abstracts;

use TemplateMarket\Utils\Hookable;
use TemplateMarket\Utils\Singleton;

abstract class EnqueuerBase {
    use Hookable;
    use Singleton;
}
