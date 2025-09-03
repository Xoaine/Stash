// Delete RevenueCat Header - Stash Rewrite
// Author: Ohoang7 (ported to Stash by ChatGPT)

if (typeof $request !== "undefined") {
  let modifiedHeaders = $request.headers;
  modifiedHeaders["X-RevenueCat-ETag"] = "";
  $done({ headers: modifiedHeaders });
}