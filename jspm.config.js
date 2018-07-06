SystemJS.config({
	paths: {
		"github:": "jspm_packages/github/",
		"npm:": "jspm_packages/npm/",
		"src/": "src/",
		"dist/jspm.bundle.js": "https://rawgit.com/aurelia-ui-toolkits/demo-materialize/gh-pages/dist/jspm.bundle.js"
	},
	browserConfig: {
		"bundles": {
			"dist/jspm.bundle.js": [
				"src/shared/logger.ts",
				"npm:aurelia-framework@1.3.0/aurelia-framework.js",
				"npm:aurelia-framework@1.3.0.json",
				"npm:aurelia-logging@1.5.0/aurelia-logging.js",
				"npm:aurelia-logging@1.5.0.json",
				"npm:aurelia-pal@1.8.0/aurelia-pal.js",
				"npm:aurelia-pal@1.8.0.json",
				"npm:aurelia-path@1.1.1/aurelia-path.js",
				"npm:aurelia-path@1.1.1.json",
				"npm:aurelia-task-queue@1.3.1/aurelia-task-queue.js",
				"npm:aurelia-task-queue@1.3.1.json",
				"npm:aurelia-loader@1.0.0/aurelia-loader.js",
				"npm:aurelia-loader@1.0.0.json",
				"npm:aurelia-metadata@1.0.4/aurelia-metadata.js",
				"npm:aurelia-metadata@1.0.4.json",
				"npm:aurelia-templating@1.8.1/aurelia-templating.js",
				"npm:aurelia-templating@1.8.1.json",
				"npm:aurelia-binding@2.1.1/aurelia-binding.js",
				"npm:aurelia-binding@2.1.1.json",
				"npm:aurelia-dependency-injection@1.4.1/aurelia-dependency-injection.js",
				"npm:aurelia-dependency-injection@1.4.1.json",
				"github:frankwallis/plugin-typescript@9.0.0.json",
				"src/shared/logger.html!github:systemjs/plugin-text@0.0.4/text.js",
				"github:systemjs/plugin-text@0.0.4.json",
				"npm:materialize-css@next/dist/js/materialize.js",
				"npm:materialize-css@next.json",
				"npm:materialize-css@next/dist/css/materialize.css!github:systemjs/plugin-css@0.1.37/css.js",
				"github:systemjs/plugin-css@0.1.37.json",
				"npm:aurelia-templating-router@1.3.2/aurelia-templating-router.js",
				"npm:aurelia-templating-router@1.3.2.json",
				"npm:aurelia-templating-router@1.3.2/route-href.js",
				"npm:aurelia-router@1.6.1/aurelia-router.js",
				"npm:aurelia-router@1.6.1.json",
				"npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
				"npm:aurelia-event-aggregator@1.0.1.json",
				"npm:aurelia-history@1.1.0/aurelia-history.js",
				"npm:aurelia-history@1.1.0.json",
				"npm:aurelia-route-recognizer@1.2.0/aurelia-route-recognizer.js",
				"npm:aurelia-route-recognizer@1.2.0.json",
				"npm:aurelia-templating-router@1.3.2/router-view.js",
				"npm:aurelia-templating-router@1.3.2/route-loader.js",
				"npm:aurelia-templating-resources@1.7.1/aurelia-templating-resources.js",
				"npm:aurelia-templating-resources@1.7.1.json",
				"npm:aurelia-templating-resources@1.7.1/aurelia-hide-style.js",
				"npm:aurelia-templating-resources@1.7.1/analyze-view-factory.js",
				"npm:aurelia-templating-resources@1.7.1/repeat-utilities.js",
				"npm:aurelia-templating-resources@1.7.1/number-repeat-strategy.js",
				"npm:aurelia-templating-resources@1.7.1/set-repeat-strategy.js",
				"npm:aurelia-templating-resources@1.7.1/map-repeat-strategy.js",
				"npm:aurelia-templating-resources@1.7.1/array-repeat-strategy.js",
				"npm:aurelia-templating-resources@1.7.1/null-repeat-strategy.js",
				"npm:aurelia-templating-resources@1.7.1/html-resource-plugin.js",
				"npm:aurelia-templating-resources@1.7.1/dynamic-element.js",
				"npm:aurelia-templating-resources@1.7.1/repeat-strategy-locator.js",
				"npm:aurelia-templating-resources@1.7.1/abstract-repeater.js",
				"npm:aurelia-templating-resources@1.7.1/update-trigger-binding-behavior.js",
				"npm:aurelia-templating-resources@1.7.1/binding-signaler.js",
				"npm:aurelia-templating-resources@1.7.1/signal-binding-behavior.js",
				"npm:aurelia-templating-resources@1.7.1/self-binding-behavior.js",
				"npm:aurelia-templating-resources@1.7.1/debounce-binding-behavior.js",
				"npm:aurelia-templating-resources@1.7.1/throttle-binding-behavior.js",
				"npm:aurelia-templating-resources@1.7.1/binding-mode-behaviors.js",
				"npm:aurelia-templating-resources@1.7.1/attr-binding-behavior.js",
				"npm:aurelia-templating-resources@1.7.1/html-sanitizer.js",
				"npm:aurelia-templating-resources@1.7.1/css-resource.js",
				"npm:aurelia-templating-resources@1.7.1/focus.js",
				"npm:aurelia-templating-resources@1.7.1/replaceable.js",
				"npm:aurelia-templating-resources@1.7.1/sanitize-html.js",
				"npm:aurelia-templating-resources@1.7.1/hide.js",
				"npm:aurelia-templating-resources@1.7.1/show.js",
				"npm:aurelia-templating-resources@1.7.1/repeat.js",
				"npm:aurelia-templating-resources@1.7.1/with.js",
				"npm:aurelia-templating-resources@1.7.1/else.js",
				"npm:aurelia-templating-resources@1.7.1/if-core.js",
				"npm:aurelia-templating-resources@1.7.1/if.js",
				"npm:aurelia-templating-resources@1.7.1/compose.js",
				"npm:aurelia-templating-binding@1.4.3/aurelia-templating-binding.js",
				"npm:aurelia-templating-binding@1.4.3.json",
				"npm:aurelia-pal-browser@1.8.0/aurelia-pal-browser.js",
				"npm:aurelia-pal-browser@1.8.0.json",
				"npm:aurelia-materialize-bridge@next/well/md-well.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next.json",
				"npm:aurelia-materialize-bridge@next/timepicker/timepicker.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/tap-target/tap-target.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/switch/switch.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/switch/switch.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/slider/slider.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/slider/slider.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/sidenav/sidenav.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/sidenav/sidenav.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/range/range.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/range/range.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/radio/radio.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/progress/progress.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/pagination/pagination.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/navbar/navbar.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/navbar/navbar.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/lookup/lookup.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/lookup/lookup.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/input/input.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/input/input.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/index.js",
				"npm:aurelia-materialize-bridge@next/exports.js",
				"npm:aurelia-materialize-bridge@next/config-builder.js",
				"npm:aurelia-materialize-bridge@next/well/md-well.js",
				"npm:aurelia-materialize-bridge@next/aurelia.js",
				"npm:aurelia-materialize-bridge@next/common/colors-service.js",
				"npm:aurelia-materialize-bridge@next/common/shade-blend-convert.js",
				"npm:aurelia-materialize-bridge@next/common/attribute-manager.js",
				"npm:aurelia-materialize-bridge@next/common/util.js",
				"npm:aurelia-typed-observable-plugin@0.4.0/index.js",
				"npm:aurelia-typed-observable-plugin@0.4.0.json",
				"npm:aurelia-materialize-bridge@next/validation/validationRenderer.js",
				"npm:tslib@1.9.3/tslib.js",
				"npm:tslib@1.9.3.json",
				"npm:aurelia-validation@1.2.2/aurelia-validation.js",
				"npm:aurelia-validation@1.2.2.json",
				"npm:aurelia-validation@1.2.2/implementation/validation-rules.js",
				"npm:aurelia-validation@1.2.2/util.js",
				"npm:aurelia-validation@1.2.2/implementation/validation-messages.js",
				"npm:aurelia-validation@1.2.2/implementation/validation-message-parser.js",
				"npm:aurelia-validation@1.2.2/implementation/expression-visitor.js",
				"npm:aurelia-validation@1.2.2/implementation/rules.js",
				"npm:aurelia-validation@1.2.2/implementation/standard-validator.js",
				"npm:aurelia-validation@1.2.2/validate-result.js",
				"npm:aurelia-validation@1.2.2/validator.js",
				"npm:aurelia-validation@1.2.2/validation-renderer-custom-attribute.js",
				"npm:aurelia-validation@1.2.2/validation-controller.js",
				"npm:aurelia-validation@1.2.2/validate-event.js",
				"npm:aurelia-validation@1.2.2/property-accessor-parser.js",
				"npm:aurelia-validation@1.2.2/property-info.js",
				"npm:aurelia-validation@1.2.2/validate-trigger.js",
				"npm:aurelia-validation@1.2.2/validation-errors-custom-attribute.js",
				"npm:aurelia-validation@1.2.2/validation-controller-factory.js",
				"npm:aurelia-validation@1.2.2/validate-binding-behavior.js",
				"npm:aurelia-validation@1.2.2/validate-binding-behavior-base.js",
				"npm:aurelia-validation@1.2.2/get-target-dom-element.js",
				"npm:aurelia-materialize-bridge@next/common/events.js",
				"npm:aurelia-materialize-bridge@next/common/constants.js",
				"npm:aurelia-materialize-bridge@next/waves/waves.js",
				"npm:aurelia-materialize-bridge@next/wait-cursor/wait-cursor.js",
				"npm:aurelia-materialize-bridge@next/tooltip/tooltip.js",
				"npm:aurelia-materialize-bridge@next/toast/toastService.js",
				"npm:aurelia-materialize-bridge@next/timepicker/timepicker.js",
				"npm:aurelia-materialize-bridge@next/tap-target/tap-target.js",
				"npm:aurelia-materialize-bridge@next/tabs/tabs.js",
				"npm:aurelia-materialize-bridge@next/switch/switch.js",
				"npm:aurelia-materialize-bridge@next/slider/slider.js",
				"npm:aurelia-materialize-bridge@next/sidenav/sidenav.js",
				"npm:aurelia-materialize-bridge@next/sidenav/sidenav-collapse.js",
				"npm:aurelia-materialize-bridge@next/select/select.js",
				"npm:aurelia-materialize-bridge@next/scrollspy/scrollspy.js",
				"npm:aurelia-materialize-bridge@next/range/range.js",
				"npm:aurelia-materialize-bridge@next/radio/radio.js",
				"npm:aurelia-materialize-bridge@next/pushpin/pushpin.js",
				"npm:aurelia-materialize-bridge@next/progress/progress.js",
				"npm:aurelia-materialize-bridge@next/parallax/parallax.js",
				"npm:aurelia-materialize-bridge@next/pagination/pagination.js",
				"npm:aurelia-materialize-bridge@next/navbar/navbar.js",
				"npm:aurelia-materialize-bridge@next/modal/modal.js",
				"npm:aurelia-materialize-bridge@next/lookup/lookup.js",
				"npm:aurelia-materialize-bridge@next/common/discardable-promise.js",
				"npm:aurelia-materialize-bridge@next/lookup/lookup-state.js",
				"npm:aurelia-materialize-bridge@next/input/input.js",
				"npm:aurelia-materialize-bridge@next/input/input-prefix.js",
				"npm:aurelia-materialize-bridge@next/footer/footer.js",
				"npm:aurelia-materialize-bridge@next/file/file.js",
				"npm:aurelia-materialize-bridge@next/fab/fab.js",
				"npm:aurelia-materialize-bridge@next/dropdown/dropdown.js",
				"npm:aurelia-materialize-bridge@next/dropdown/dropdown-element.js",
				"npm:aurelia-materialize-bridge@next/datepicker/datepicker.js",
				"npm:aurelia-materialize-bridge@next/colors/md-colors.js",
				"npm:aurelia-materialize-bridge@next/colors/color-value-converters.js",
				"npm:aurelia-materialize-bridge@next/collection/md-collection-selector.js",
				"npm:aurelia-materialize-bridge@next/collection/collection.js",
				"npm:aurelia-materialize-bridge@next/collection/collection-item.js",
				"npm:aurelia-materialize-bridge@next/collection/collection-header.js",
				"npm:aurelia-materialize-bridge@next/collapsible/collapsible.js",
				"npm:aurelia-materialize-bridge@next/chip/chips.js",
				"npm:aurelia-materialize-bridge@next/chip/chip.js",
				"npm:aurelia-materialize-bridge@next/checkbox/checkbox.js",
				"npm:aurelia-materialize-bridge@next/char-counter/char-counter.js",
				"npm:aurelia-materialize-bridge@next/carousel/carousel.js",
				"npm:aurelia-materialize-bridge@next/carousel/carousel-item.js",
				"npm:aurelia-materialize-bridge@next/card/card.js",
				"npm:aurelia-materialize-bridge@next/button/button.js",
				"npm:aurelia-materialize-bridge@next/breadcrumbs/instructionFilter.js",
				"npm:aurelia-materialize-bridge@next/breadcrumbs/breadcrumbs.js",
				"npm:aurelia-materialize-bridge@next/box/box.js",
				"npm:aurelia-materialize-bridge@next/badge/badge.js",
				"npm:aurelia-materialize-bridge@next/autocomplete/autocomplete.js",
				"npm:aurelia-materialize-bridge@next/augmentation/aurelia-typed-observable.js",
				"npm:aurelia-materialize-bridge@next/augmentation/materialize.js",
				"npm:aurelia-materialize-bridge@next/augmentation/element.js",
				"npm:aurelia-materialize-bridge@next/file/file.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/fab/fab.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/dropdown/dropdown-element.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/datepicker/datepicker.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/colors/md-colors.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/collection/md-collection-selector.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/collection/md-collection-selector.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/collection/collection.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/collection/collection-item.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/collection/collection-item.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/collection/collection-header.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/collection/collection-header.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/click-counter/click-counter.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/chip/chip.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/chip/chip.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/checkbox/checkbox.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/carousel/carousel.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/carousel/carousel.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/carousel/carousel-item.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/card/card.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/card/card.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/breadcrumbs/breadcrumbs.html!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-materialize-bridge@next/breadcrumbs/breadcrumbs.css!github:systemjs/plugin-text@0.0.4/text.js",
				"npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
				"npm:aurelia-logging-console@1.0.0.json",
				"npm:aurelia-loader-default@1.0.4/aurelia-loader-default.js",
				"npm:aurelia-loader-default@1.0.4.json",
				"npm:aurelia-history-browser@1.2.0/aurelia-history-browser.js",
				"npm:aurelia-history-browser@1.2.0.json",
				"npm:aurelia-fetch-client@1.4.0/aurelia-fetch-client.js",
				"npm:aurelia-fetch-client@1.4.0.json",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/aurelia-dialog.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0.json",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-controller.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-cancel-error.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-close-error.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/lifecycle.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/renderer.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-service.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-settings.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/attach-focus.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/ux-dialog-footer.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/ux-dialog-body.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/ux-dialog-header.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/ux-dialog.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-configuration.js",
				"npm:aurelia-dialog@1.0.0-rc.2.0.0/dialog-renderer.js",
				"npm:aurelia-bootstrapper@2.3.0/aurelia-bootstrapper.js",
				"npm:aurelia-bootstrapper@2.3.0.json",
				"npm:aurelia-polyfills@1.3.0/aurelia-polyfills.js",
				"npm:aurelia-polyfills@1.3.0.json",
				"github:systemjs/plugin-text@0.0.4/text.js",
				"github:frankwallis/plugin-typescript@9.0.0/plugin.js",
				"npm:typescript@2.8.1/lib/typescript.js",
				"npm:typescript@2.8.1.json",
				"npm:source-map-support@0.5.6/source-map-support.js",
				"npm:source-map-support@0.5.6.json",
				"npm:jspm-nodelibs-process@0.2.1/process.js",
				"npm:jspm-nodelibs-process@0.2.1.json",
				"npm:jspm-nodelibs-module@0.2.1.json",
				"npm:buffer-from@1.1.0/index.js",
				"npm:buffer-from@1.1.0.json",
				"npm:jspm-nodelibs-buffer@0.2.3/global.js",
				"npm:jspm-nodelibs-buffer@0.2.3.json",
				"npm:buffer@5.1.0/index.js",
				"npm:buffer@5.1.0.json",
				"npm:ieee754@1.1.12/index.js",
				"npm:ieee754@1.1.12.json",
				"npm:base64-js@1.3.0/index.js",
				"npm:base64-js@1.3.0.json",
				"npm:jspm-nodelibs-fs@0.2.1/fs.js",
				"npm:jspm-nodelibs-fs@0.2.1.json",
				"npm:jspm-nodelibs-path@0.2.3/path.js",
				"npm:jspm-nodelibs-path@0.2.3.json",
				"npm:source-map@0.6.1/source-map.js",
				"npm:source-map@0.6.1.json",
				"npm:source-map@0.6.1/lib/source-node.js",
				"npm:source-map@0.6.1/lib/util.js",
				"npm:source-map@0.6.1/lib/source-map-generator.js",
				"npm:source-map@0.6.1/lib/mapping-list.js",
				"npm:source-map@0.6.1/lib/array-set.js",
				"npm:source-map@0.6.1/lib/base64-vlq.js",
				"npm:source-map@0.6.1/lib/base64.js",
				"npm:source-map@0.6.1/lib/source-map-consumer.js",
				"npm:source-map@0.6.1/lib/quick-sort.js",
				"npm:source-map@0.6.1/lib/binary-search.js",
				"npm:crypto-browserify@3.12.0/index.js",
				"npm:crypto-browserify@3.12.0.json",
				"npm:randomfill@1.0.4/browser.js",
				"npm:randomfill@1.0.4.json",
				"npm:randombytes@2.0.6/browser.js",
				"npm:randombytes@2.0.6.json",
				"npm:safe-buffer@5.1.2/index.js",
				"npm:safe-buffer@5.1.2.json",
				"npm:public-encrypt@4.0.2/browser.js",
				"npm:public-encrypt@4.0.2.json",
				"npm:public-encrypt@4.0.2/privateDecrypt.js",
				"npm:public-encrypt@4.0.2/withPublic.js",
				"npm:bn.js@4.11.8/lib/bn.js",
				"npm:bn.js@4.11.8.json",
				"npm:create-hash@1.2.0/browser.js",
				"npm:create-hash@1.2.0.json",
				"npm:cipher-base@1.0.4/index.js",
				"npm:cipher-base@1.0.4.json",
				"npm:inherits@2.0.3/inherits_browser.js",
				"npm:inherits@2.0.3.json",
				"npm:string_decoder@0.10.31/index.js",
				"npm:string_decoder@0.10.31.json",
				"npm:jspm-nodelibs-string_decoder@0.2.2.json",
				"npm:stream-browserify@2.0.1/index.js",
				"npm:stream-browserify@2.0.1.json",
				"npm:readable-stream@2.3.6/passthrough.js",
				"npm:readable-stream@2.3.6.json",
				"npm:readable-stream@2.3.6/readable-browser.js",
				"npm:readable-stream@2.3.6/lib/_stream_passthrough.js",
				"npm:core-util-is@1.0.2/lib/util.js",
				"npm:core-util-is@1.0.2.json",
				"npm:readable-stream@2.3.6/lib/_stream_transform.js",
				"npm:readable-stream@2.3.6/lib/_stream_duplex.js",
				"npm:readable-stream@2.3.6/lib/_stream_writable.js",
				"npm:readable-stream@2.3.6/lib/internal/streams/destroy.js",
				"npm:process-nextick-args@2.0.0/index.js",
				"npm:process-nextick-args@2.0.0.json",
				"npm:readable-stream@2.3.6/lib/internal/streams/stream-browser.js",
				"npm:jspm-nodelibs-events@0.2.2/events.js",
				"npm:jspm-nodelibs-events@0.2.2.json",
				"npm:util-deprecate@1.0.2/browser.js",
				"npm:util-deprecate@1.0.2.json",
				"npm:readable-stream@2.3.6/lib/_stream_readable.js",
				"npm:string_decoder@1.1.1/lib/string_decoder.js",
				"npm:string_decoder@1.1.1.json",
				"npm:readable-stream@2.3.6/lib/internal/streams/BufferList.js",
				"npm:isarray@1.0.0/index.js",
				"npm:isarray@1.0.0.json",
				"npm:readable-stream@2.3.6/transform.js",
				"npm:readable-stream@2.3.6/duplex-browser.js",
				"npm:readable-stream@2.3.6/writable-browser.js",
				"npm:jspm-nodelibs-stream@0.2.1.json",
				"npm:sha.js@2.4.11/index.js",
				"npm:sha.js@2.4.11.json",
				"npm:sha.js@2.4.11/sha512.js",
				"npm:sha.js@2.4.11/hash.js",
				"npm:sha.js@2.4.11/sha384.js",
				"npm:sha.js@2.4.11/sha256.js",
				"npm:sha.js@2.4.11/sha224.js",
				"npm:sha.js@2.4.11/sha1.js",
				"npm:sha.js@2.4.11/sha.js",
				"npm:ripemd160@2.0.2/index.js",
				"npm:ripemd160@2.0.2.json",
				"npm:hash-base@3.0.4/index.js",
				"npm:hash-base@3.0.4.json",
				"npm:md5.js@1.3.4/index.js",
				"npm:md5.js@1.3.4.json",
				"npm:browserify-rsa@4.0.1/index.js",
				"npm:browserify-rsa@4.0.1.json",
				"npm:public-encrypt@4.0.2/xor.js",
				"npm:public-encrypt@4.0.2/mgf.js",
				"npm:parse-asn1@5.1.1/index.js",
				"npm:parse-asn1@5.1.1.json",
				"npm:pbkdf2@3.0.16/browser.js",
				"npm:pbkdf2@3.0.16.json",
				"npm:pbkdf2@3.0.16/lib/sync-browser.js",
				"npm:pbkdf2@3.0.16/lib/default-encoding.js",
				"npm:pbkdf2@3.0.16/lib/precondition.js",
				"npm:create-hash@1.2.0/md5.js",
				"npm:pbkdf2@3.0.16/lib/async.js",
				"npm:browserify-aes@1.2.0/browser.js",
				"npm:browserify-aes@1.2.0.json",
				"npm:browserify-aes@1.2.0/modes/list.json",
				"npm:browserify-aes@1.2.0/decrypter.js",
				"npm:evp_bytestokey@1.0.3/index.js",
				"npm:evp_bytestokey@1.0.3.json",
				"npm:browserify-aes@1.2.0/aes.js",
				"npm:browserify-aes@1.2.0/streamCipher.js",
				"npm:browserify-aes@1.2.0/modes/index.js",
				"npm:browserify-aes@1.2.0/modes/ctr.js",
				"npm:browserify-aes@1.2.0/incr32.js",
				"npm:buffer-xor@1.0.3/index.js",
				"npm:buffer-xor@1.0.3.json",
				"npm:browserify-aes@1.2.0/modes/ofb.js",
				"npm:browserify-aes@1.2.0/modes/cfb1.js",
				"npm:browserify-aes@1.2.0/modes/cfb8.js",
				"npm:browserify-aes@1.2.0/modes/cfb.js",
				"npm:browserify-aes@1.2.0/modes/cbc.js",
				"npm:browserify-aes@1.2.0/modes/ecb.js",
				"npm:browserify-aes@1.2.0/authCipher.js",
				"npm:browserify-aes@1.2.0/ghash.js",
				"npm:browserify-aes@1.2.0/encrypter.js",
				"npm:parse-asn1@5.1.1/fixProc.js",
				"npm:parse-asn1@5.1.1/aesid.json",
				"npm:parse-asn1@5.1.1/asn1.js",
				"npm:parse-asn1@5.1.1/certificate.js",
				"npm:asn1.js@4.10.1/lib/asn1.js",
				"npm:asn1.js@4.10.1.json",
				"npm:asn1.js@4.10.1/lib/asn1/encoders/index.js",
				"npm:asn1.js@4.10.1/lib/asn1/encoders/pem.js",
				"npm:asn1.js@4.10.1/lib/asn1/encoders/der.js",
				"npm:asn1.js@4.10.1/lib/asn1/decoders/index.js",
				"npm:asn1.js@4.10.1/lib/asn1/decoders/pem.js",
				"npm:asn1.js@4.10.1/lib/asn1/decoders/der.js",
				"npm:asn1.js@4.10.1/lib/asn1/constants/index.js",
				"npm:asn1.js@4.10.1/lib/asn1/constants/der.js",
				"npm:asn1.js@4.10.1/lib/asn1/base/index.js",
				"npm:asn1.js@4.10.1/lib/asn1/base/node.js",
				"npm:minimalistic-assert@1.0.1/index.js",
				"npm:minimalistic-assert@1.0.1.json",
				"npm:asn1.js@4.10.1/lib/asn1/base/buffer.js",
				"npm:asn1.js@4.10.1/lib/asn1/base/reporter.js",
				"npm:asn1.js@4.10.1/lib/asn1/api.js",
				"npm:jspm-nodelibs-vm@0.2.1/vm.js",
				"npm:jspm-nodelibs-vm@0.2.1.json",
				"npm:public-encrypt@4.0.2/publicEncrypt.js",
				"npm:create-ecdh@4.0.3/browser.js",
				"npm:create-ecdh@4.0.3.json",
				"npm:elliptic@6.4.0/lib/elliptic.js",
				"npm:elliptic@6.4.0.json",
				"npm:elliptic@6.4.0/lib/elliptic/eddsa/index.js",
				"npm:elliptic@6.4.0/lib/elliptic/eddsa/signature.js",
				"npm:elliptic@6.4.0/lib/elliptic/eddsa/key.js",
				"npm:hash.js@1.1.4/lib/hash.js",
				"npm:hash.js@1.1.4.json",
				"npm:hash.js@1.1.4/lib/hash/hmac.js",
				"npm:hash.js@1.1.4/lib/hash/utils.js",
				"npm:hash.js@1.1.4/lib/hash/ripemd.js",
				"npm:hash.js@1.1.4/lib/hash/common.js",
				"npm:hash.js@1.1.4/lib/hash/sha.js",
				"npm:hash.js@1.1.4/lib/hash/sha/512.js",
				"npm:hash.js@1.1.4/lib/hash/sha/384.js",
				"npm:hash.js@1.1.4/lib/hash/sha/256.js",
				"npm:hash.js@1.1.4/lib/hash/sha/common.js",
				"npm:hash.js@1.1.4/lib/hash/sha/224.js",
				"npm:hash.js@1.1.4/lib/hash/sha/1.js",
				"npm:elliptic@6.4.0/lib/elliptic/ec/index.js",
				"npm:elliptic@6.4.0/lib/elliptic/ec/signature.js",
				"npm:elliptic@6.4.0/lib/elliptic/ec/key.js",
				"npm:hmac-drbg@1.0.1/lib/hmac-drbg.js",
				"npm:hmac-drbg@1.0.1.json",
				"npm:minimalistic-crypto-utils@1.0.1/lib/utils.js",
				"npm:minimalistic-crypto-utils@1.0.1.json",
				"npm:elliptic@6.4.0/lib/elliptic/curves.js",
				"npm:elliptic@6.4.0/lib/elliptic/precomputed/secp256k1.js",
				"npm:elliptic@6.4.0/lib/elliptic/curve/index.js",
				"npm:elliptic@6.4.0/lib/elliptic/curve/edwards.js",
				"npm:elliptic@6.4.0/lib/elliptic/curve/mont.js",
				"npm:elliptic@6.4.0/lib/elliptic/curve/short.js",
				"npm:elliptic@6.4.0/lib/elliptic/curve/base.js",
				"npm:brorand@1.1.0/index.js",
				"npm:brorand@1.1.0.json",
				"npm:elliptic@6.4.0/lib/elliptic/utils.js",
				"npm:elliptic@6.4.0/package.json",
				"npm:browserify-sign@4.0.4/browser/index.js",
				"npm:browserify-sign@4.0.4.json",
				"npm:browserify-sign@4.0.4/browser/algorithms.json",
				"npm:browserify-sign@4.0.4/browser/verify.js",
				"npm:browserify-sign@4.0.4/browser/curves.json",
				"npm:browserify-sign@4.0.4/browser/sign.js",
				"npm:create-hmac@1.1.7/browser.js",
				"npm:create-hmac@1.1.7.json",
				"npm:create-hmac@1.1.7/legacy.js",
				"npm:diffie-hellman@5.0.3/browser.js",
				"npm:diffie-hellman@5.0.3.json",
				"npm:diffie-hellman@5.0.3/lib/dh.js",
				"npm:diffie-hellman@5.0.3/lib/generatePrime.js",
				"npm:miller-rabin@4.0.1/lib/mr.js",
				"npm:miller-rabin@4.0.1.json",
				"npm:diffie-hellman@5.0.3/lib/primes.json",
				"npm:browserify-cipher@1.0.1/browser.js",
				"npm:browserify-cipher@1.0.1.json",
				"npm:browserify-des@1.0.1/modes.js",
				"npm:browserify-des@1.0.1.json",
				"npm:browserify-des@1.0.1/index.js",
				"npm:des.js@1.0.0/lib/des.js",
				"npm:des.js@1.0.0.json",
				"npm:des.js@1.0.0/lib/des/ede.js",
				"npm:des.js@1.0.0/lib/des/cbc.js",
				"npm:des.js@1.0.0/lib/des/des.js",
				"npm:des.js@1.0.0/lib/des/cipher.js",
				"npm:des.js@1.0.0/lib/des/utils.js",
				"npm:browserify-sign@4.0.4/algos.js",
				"npm:jspm-nodelibs-crypto@0.2.1.json",
				"npm:os-browserify@0.3.0/browser.js",
				"npm:os-browserify@0.3.0.json",
				"npm:jspm-nodelibs-os@0.2.2.json"
			]
		}
	},
	transpiler: "plugin-typescript",
	typescriptOptions: {
		"target": "es5",
		"lib": [
			"es2017",
			"dom"
		],
		"experimentalDecorators": true,
		"emitDecoratorMetadata": true
	},
	packages: {
		"src": {
			"main": "configure.ts",
			"defaultExtension": "ts",
			"meta": {
				"*.ts": {
					"loader": "plugin-typescript"
				}
			}
		}
	}
});

SystemJS.config({
	packageConfigPaths: [
		"github:*/*.json",
		"npm:@*/*.json",
		"npm:*.json"
	],
	map: {
		"assert": "npm:jspm-nodelibs-assert@0.2.1",
		"aurelia-binding": "npm:aurelia-binding@2.1.1",
		"aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.0",
		"aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
		"aurelia-dialog": "npm:aurelia-dialog@1.0.0-rc.2.0.0",
		"aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
		"aurelia-fetch-client": "npm:aurelia-fetch-client@1.4.0",
		"aurelia-framework": "npm:aurelia-framework@1.3.0",
		"aurelia-history": "npm:aurelia-history@1.1.0",
		"aurelia-history-browser": "npm:aurelia-history-browser@1.2.0",
		"aurelia-loader": "npm:aurelia-loader@1.0.0",
		"aurelia-loader-default": "npm:aurelia-loader-default@1.0.4",
		"aurelia-logging": "npm:aurelia-logging@1.5.0",
		"aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
		"aurelia-materialize-bridge": "npm:aurelia-materialize-bridge@next",
		"aurelia-metadata": "npm:aurelia-metadata@1.0.4",
		"aurelia-pal": "npm:aurelia-pal@1.8.0",
		"aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.0",
		"aurelia-path": "npm:aurelia-path@1.1.1",
		"aurelia-polyfills": "npm:aurelia-polyfills@1.3.0",
		"aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.2.0",
		"aurelia-router": "npm:aurelia-router@1.6.1",
		"aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
		"aurelia-templating": "npm:aurelia-templating@1.8.1",
		"aurelia-templating-binding": "npm:aurelia-templating-binding@1.4.3",
		"aurelia-templating-resources": "npm:aurelia-templating-resources@1.7.1",
		"aurelia-templating-router": "npm:aurelia-templating-router@1.3.2",
		"aurelia-typed-observable-plugin": "npm:aurelia-typed-observable-plugin@0.4.0",
		"aurelia-validation": "npm:aurelia-validation@1.2.2",
		"buffer": "npm:jspm-nodelibs-buffer@0.2.3",
		"constants": "npm:jspm-nodelibs-constants@0.2.1",
		"crypto": "npm:jspm-nodelibs-crypto@0.2.1",
		"css": "github:systemjs/plugin-css@0.1.37",
		"events": "npm:jspm-nodelibs-events@0.2.2",
		"fs": "npm:jspm-nodelibs-fs@0.2.1",
		"materialize-css": "npm:materialize-css@next",
		"module": "npm:jspm-nodelibs-module@0.2.1",
		"net": "npm:jspm-nodelibs-net@0.2.1",
		"os": "npm:jspm-nodelibs-os@0.2.2",
		"path": "npm:jspm-nodelibs-path@0.2.3",
		"plugin-typescript": "github:frankwallis/plugin-typescript@9.0.0",
		"process": "npm:jspm-nodelibs-process@0.2.1",
		"stream": "npm:jspm-nodelibs-stream@0.2.1",
		"string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
		"text": "github:systemjs/plugin-text@0.0.4",
		"typescript": "npm:typescript@2.8.1",
		"util": "npm:jspm-nodelibs-util@0.2.2",
		"vm": "npm:jspm-nodelibs-vm@0.2.1"
	},
	packages: {
		"npm:aurelia-materialize-bridge@next": {
			"map": {
				"aurelia-fetch-client": "npm:aurelia-fetch-client@1.4.0",
				"aurelia-typed-observable-plugin": "npm:aurelia-typed-observable-plugin@0.4.0",
				"aurelia-validation": "npm:aurelia-validation@1.2.2",
				"aurelia-templating": "npm:aurelia-templating@1.8.1",
				"aurelia-framework": "npm:aurelia-framework@1.3.0",
				"aurelia-router": "npm:aurelia-router@1.6.1",
				"tslib": "npm:tslib@1.9.3"
			}
		},
		"npm:aurelia-fetch-client@1.4.0": {
			"map": {
				"aurelia-pal": "npm:aurelia-pal@1.8.0"
			}
		},
		"npm:aurelia-binding@2.1.1": {
			"map": {
				"aurelia-logging": "npm:aurelia-logging@1.5.0",
				"aurelia-metadata": "npm:aurelia-metadata@1.0.4",
				"aurelia-pal": "npm:aurelia-pal@1.8.0",
				"aurelia-task-queue": "npm:aurelia-task-queue@1.3.1"
			}
		},
		"npm:source-map-support@0.5.6": {
			"map": {
				"buffer-from": "npm:buffer-from@1.1.0",
				"source-map": "npm:source-map@0.6.1"
			}
		},
		"npm:jspm-nodelibs-buffer@0.2.3": {
			"map": {
				"buffer": "npm:buffer@5.1.0"
			}
		},
		"npm:buffer@5.1.0": {
			"map": {
				"ieee754": "npm:ieee754@1.1.12",
				"base64-js": "npm:base64-js@1.3.0"
			}
		},
		"npm:jspm-nodelibs-os@0.2.2": {
			"map": {
				"os-browserify": "npm:os-browserify@0.3.0"
			}
		},
		"npm:jspm-nodelibs-crypto@0.2.1": {
			"map": {
				"crypto-browserify": "npm:crypto-browserify@3.12.0"
			}
		},
		"npm:crypto-browserify@3.12.0": {
			"map": {
				"create-hmac": "npm:create-hmac@1.1.7",
				"browserify-sign": "npm:browserify-sign@4.0.4",
				"browserify-cipher": "npm:browserify-cipher@1.0.1",
				"public-encrypt": "npm:public-encrypt@4.0.2",
				"create-ecdh": "npm:create-ecdh@4.0.3",
				"inherits": "npm:inherits@2.0.3",
				"diffie-hellman": "npm:diffie-hellman@5.0.3",
				"create-hash": "npm:create-hash@1.2.0",
				"randombytes": "npm:randombytes@2.0.6",
				"pbkdf2": "npm:pbkdf2@3.0.16",
				"randomfill": "npm:randomfill@1.0.4"
			}
		},
		"npm:browserify-sign@4.0.4": {
			"map": {
				"create-hmac": "npm:create-hmac@1.1.7",
				"inherits": "npm:inherits@2.0.3",
				"create-hash": "npm:create-hash@1.2.0",
				"browserify-rsa": "npm:browserify-rsa@4.0.1",
				"bn.js": "npm:bn.js@4.11.8",
				"parse-asn1": "npm:parse-asn1@5.1.1",
				"elliptic": "npm:elliptic@6.4.0"
			}
		},
		"npm:create-hmac@1.1.7": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"create-hash": "npm:create-hash@1.2.0",
				"ripemd160": "npm:ripemd160@2.0.2",
				"safe-buffer": "npm:safe-buffer@5.1.2",
				"cipher-base": "npm:cipher-base@1.0.4",
				"sha.js": "npm:sha.js@2.4.11"
			}
		},
		"npm:public-encrypt@4.0.2": {
			"map": {
				"create-hash": "npm:create-hash@1.2.0",
				"randombytes": "npm:randombytes@2.0.6",
				"browserify-rsa": "npm:browserify-rsa@4.0.1",
				"bn.js": "npm:bn.js@4.11.8",
				"parse-asn1": "npm:parse-asn1@5.1.1"
			}
		},
		"npm:diffie-hellman@5.0.3": {
			"map": {
				"randombytes": "npm:randombytes@2.0.6",
				"bn.js": "npm:bn.js@4.11.8",
				"miller-rabin": "npm:miller-rabin@4.0.1"
			}
		},
		"npm:create-hash@1.2.0": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"ripemd160": "npm:ripemd160@2.0.2",
				"cipher-base": "npm:cipher-base@1.0.4",
				"sha.js": "npm:sha.js@2.4.11",
				"md5.js": "npm:md5.js@1.3.4"
			}
		},
		"npm:pbkdf2@3.0.16": {
			"map": {
				"create-hash": "npm:create-hash@1.2.0",
				"create-hmac": "npm:create-hmac@1.1.7",
				"ripemd160": "npm:ripemd160@2.0.2",
				"safe-buffer": "npm:safe-buffer@5.1.2",
				"sha.js": "npm:sha.js@2.4.11"
			}
		},
		"npm:randomfill@1.0.4": {
			"map": {
				"randombytes": "npm:randombytes@2.0.6",
				"safe-buffer": "npm:safe-buffer@5.1.2"
			}
		},
		"npm:ripemd160@2.0.2": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"hash-base": "npm:hash-base@3.0.4"
			}
		},
		"npm:randombytes@2.0.6": {
			"map": {
				"safe-buffer": "npm:safe-buffer@5.1.2"
			}
		},
		"npm:cipher-base@1.0.4": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"safe-buffer": "npm:safe-buffer@5.1.2"
			}
		},
		"npm:sha.js@2.4.11": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"safe-buffer": "npm:safe-buffer@5.1.2"
			}
		},
		"npm:browserify-cipher@1.0.1": {
			"map": {
				"browserify-des": "npm:browserify-des@1.0.1",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.3",
				"browserify-aes": "npm:browserify-aes@1.2.0"
			}
		},
		"npm:browserify-rsa@4.0.1": {
			"map": {
				"randombytes": "npm:randombytes@2.0.6",
				"bn.js": "npm:bn.js@4.11.8"
			}
		},
		"npm:create-ecdh@4.0.3": {
			"map": {
				"bn.js": "npm:bn.js@4.11.8",
				"elliptic": "npm:elliptic@6.4.0"
			}
		},
		"npm:browserify-des@1.0.1": {
			"map": {
				"cipher-base": "npm:cipher-base@1.0.4",
				"inherits": "npm:inherits@2.0.3",
				"des.js": "npm:des.js@1.0.0"
			}
		},
		"npm:parse-asn1@5.1.1": {
			"map": {
				"browserify-aes": "npm:browserify-aes@1.2.0",
				"create-hash": "npm:create-hash@1.2.0",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.3",
				"pbkdf2": "npm:pbkdf2@3.0.16",
				"asn1.js": "npm:asn1.js@4.10.1"
			}
		},
		"npm:browserify-aes@1.2.0": {
			"map": {
				"cipher-base": "npm:cipher-base@1.0.4",
				"inherits": "npm:inherits@2.0.3",
				"create-hash": "npm:create-hash@1.2.0",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.3",
				"safe-buffer": "npm:safe-buffer@5.1.2",
				"buffer-xor": "npm:buffer-xor@1.0.3"
			}
		},
		"npm:elliptic@6.4.0": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"bn.js": "npm:bn.js@4.11.8",
				"hash.js": "npm:hash.js@1.1.4",
				"hmac-drbg": "npm:hmac-drbg@1.0.1",
				"brorand": "npm:brorand@1.1.0",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.1",
				"minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
			}
		},
		"npm:evp_bytestokey@1.0.3": {
			"map": {
				"safe-buffer": "npm:safe-buffer@5.1.2",
				"md5.js": "npm:md5.js@1.3.4"
			}
		},
		"npm:miller-rabin@4.0.1": {
			"map": {
				"bn.js": "npm:bn.js@4.11.8",
				"brorand": "npm:brorand@1.1.0"
			}
		},
		"npm:md5.js@1.3.4": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"hash-base": "npm:hash-base@3.0.4"
			}
		},
		"npm:hash-base@3.0.4": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"safe-buffer": "npm:safe-buffer@5.1.2"
			}
		},
		"npm:jspm-nodelibs-stream@0.2.1": {
			"map": {
				"stream-browserify": "npm:stream-browserify@2.0.1"
			}
		},
		"npm:stream-browserify@2.0.1": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"readable-stream": "npm:readable-stream@2.3.6"
			}
		},
		"npm:des.js@1.0.0": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.1"
			}
		},
		"npm:asn1.js@4.10.1": {
			"map": {
				"bn.js": "npm:bn.js@4.11.8",
				"inherits": "npm:inherits@2.0.3",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.1"
			}
		},
		"npm:hash.js@1.1.4": {
			"map": {
				"inherits": "npm:inherits@2.0.3",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.1"
			}
		},
		"npm:hmac-drbg@1.0.1": {
			"map": {
				"hash.js": "npm:hash.js@1.1.4",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.1",
				"minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
			}
		},
		"npm:jspm-nodelibs-string_decoder@0.2.2": {
			"map": {
				"string_decoder": "npm:string_decoder@0.10.31"
			}
		},
		"npm:readable-stream@2.3.6": {
			"map": {
				"string_decoder": "npm:string_decoder@1.1.1",
				"inherits": "npm:inherits@2.0.3",
				"safe-buffer": "npm:safe-buffer@5.1.2",
				"core-util-is": "npm:core-util-is@1.0.2",
				"util-deprecate": "npm:util-deprecate@1.0.2",
				"isarray": "npm:isarray@1.0.0",
				"process-nextick-args": "npm:process-nextick-args@2.0.0"
			}
		},
		"npm:string_decoder@1.1.1": {
			"map": {
				"safe-buffer": "npm:safe-buffer@5.1.2"
			}
		},
		"npm:typescript@2.8.1": {
			"map": {
				"source-map-support": "npm:source-map-support@0.5.6"
			}
		}
	}
});
