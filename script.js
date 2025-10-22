// Generated JavaScript for: Your assigned company: Capital One (COF), CIK 0000927628.

Fetch https://data.sec.gov/api/xbrl/companyconcept/CIK0000927628/dei/EntityCommonStockSharesOutstanding.json (set a descriptive User-Agent per SEC guidance).
Read `.entityName`. Filter `.units.shares[]` for entries whose `fy` > "2020" and
includes a numeric `val`.
Save `data.json` with this structure:
`{"entityName": "Capital One", "max": {"val": ..., "fy": ...}, "min": {"val": ..., "fy": ...}}`
where `max` and `min` refer to the highest and lowest `.val`. Break ties however you like.

Render a visually appealing `index.html` where:
- `<title>` and `<h1>` must include the live `entityName`.
- The max/min figures are clearly marked with these IDs:
  `share-entity-name`,
  `share-max-value`, `share-max-fy`,
  `share-min-value`, `share-min-fy`.

If the page is opened as `index.html?CIK=0001018724` (or any other 10-digit CIK),
`fetch()` from the SEC endpoint for that CIK using any proxy, e.g. AIPipe,
replace every ID listed above and the title and H1 without reloading the page.

Also commit the attachment uid.txt as-is.
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application loaded');
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    
    if (url) {
        console.log('URL parameter found:', url);
        // Process the URL parameter
        handleUrlParameter(url);
    } else {
        console.log('No URL parameter, using default');
        handleDefault();
    }
});

function handleUrlParameter(url) {
    // Skeleton function to handle URL parameter
    console.log('Processing URL:', url);
}

function handleDefault() {
    // Skeleton function for default behavior
    console.log('Using default behavior');
}