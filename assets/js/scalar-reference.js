(function () {
    // Keep existing links from the home page, help topics and bookmarks working.
    var legacyOperations = {
        get_properties: 'tag/listings/GET/properties',
        get_properties__mlsId_: 'tag/listings/GET/properties/{mlsId}',
        get_openhouses: 'tag/openhouses/GET/openhouses',
        get_openhouses__openHouseKey_: 'tag/openhouses/GET/openhouses/{openHouseKey}',
        get_agents: 'tag/agents/GET/agents',
        get_offices: 'tag/offices/GET/offices',
        get_properties_analytics: 'tag/analytics/GET/properties/analytics',
        get_properties__mlsId__analytics: 'tag/analytics/GET/properties/{mlsId}/analytics',
        options_properties: 'tag/metadata/OPTIONS/properties',
        options_: 'tag/metadata/OPTIONS/',
        options_offices: 'tag/metadata/OPTIONS/offices'
    };

    function redirectLegacyHash() {
        var hash = window.location.hash;
        if (!/^#!?\//.test(hash)) return;
        var operation = hash.slice(hash.lastIndexOf('/') + 1);
        var target = legacyOperations[operation];
        if (target) {
            window.history.replaceState(null, '', '#' + target);
        }
    }
    redirectLegacyHash();
    window.addEventListener('hashchange', redirectLegacyHash);

    Scalar.createApiReference('#scalar-reference', {
        url: './simplyrets-openapi.yaml',
        theme: 'none',
        layout: 'modern',
        operationTitleSource: 'path',
        expandAllParameters: false,
        modelsSectionLabel: 'Schemas',
        hideClientButton: true,
        hideDarkModeToggle: false,
        darkMode: false,
        withDefaultFonts: false,
        showDeveloperTools: 'never',
        agent: { disabled: true },
        mcp: { disabled: true },
        telemetry: false,
        persistAuth: false,
        // These are the documented public demo credentials, never private keys.
        authentication: {
            preferredSecurityScheme: 'basicAuth',
            securitySchemes: {
                basicAuth: { username: 'simplyrets', password: 'simplyrets' }
            }
        },
        customCss: `
            :root {
                --scalar-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                --scalar-font-code: ui-monospace, monospace;
                --scalar-sidebar-width: 250px;
            }
            body.light-mode {
                --scalar-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                --scalar-font-code: ui-monospace, monospace;
                --scalar-color-1: #333333;
                --scalar-color-2: #616161;
                --scalar-color-3: #727272;
                --scalar-color-accent: #2e7d32;
                --scalar-background-1: #fafafa;
                --scalar-background-2: #f3f4f3;
                --scalar-background-3: #e9ece9;
                --scalar-border-color: #e2e5e2;
                --scalar-sidebar-background-1: #fff;
                --scalar-sidebar-item-active-background: #edf5ed;
                --scalar-sidebar-item-active-color: #2e7d32;
                --scalar-sidebar-width: 250px;
            }
            body.dark-mode {
                --scalar-color-1: #e8eaed;
                --scalar-color-2: #bdc1c6;
                --scalar-color-3: #9aa0a6;
                --scalar-color-accent: #81c784;
                --scalar-background-1: #242629;
                --scalar-background-2: #2c2f33;
                --scalar-background-3: #35393e;
                --scalar-border-color: #454a50;
                --scalar-sidebar-background-1: #242629;
                --scalar-sidebar-item-active-background: #303a32;
                --scalar-sidebar-item-active-color: #a5d6a7;
            }
            .section-header { font-weight: 650; }
        `
    });

    var themeToggle = document.getElementById('api-theme-toggle');
    function syncThemeToggle() {
        var dark = document.body.classList.contains('dark-mode');
        var label = dark ? 'Switch to light mode' : 'Switch to dark mode';
        themeToggle.setAttribute('aria-label', label);
        themeToggle.setAttribute('aria-pressed', String(dark));
        themeToggle.title = label;
    }
    themeToggle.addEventListener('click', function () {
        // Use Scalar's native color-mode action; keep current navigation,
        // request inputs, authentication and response state intact.
        var nativeToggle = document.querySelector(
            '#scalar-reference [aria-label="Set dark mode"], ' +
            '#scalar-reference [aria-label="Set light mode"]'
        );
        if (nativeToggle) nativeToggle.closest('button').click();
    });
    new MutationObserver(syncThemeToggle).observe(document.body, {
        attributes: true, attributeFilter: ['class']
    });
    syncThemeToggle();
}());
