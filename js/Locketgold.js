// Locket Premium Unlock (15s video) - port for Stash
// Author: Ohoang7 | Fix by xoaine

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
var obj = JSON.parse($response.body);

obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

var ohoang7 = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-18T01:04:17Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2024-07-28T01:04:18Z",
  purchase_date: "2024-07-28T01:04:17Z",
  store: "app_store"
};

var vuong2023 = {
  grace_period_expires_date: null,
  purchase_date: "2024-07-28T01:04:17Z",
  product_identifier: "com.ohoang7.premium.yearly",
  expires_date: "2099-12-18T01:04:17Z"
};

// Luôn ép entitlement Gold
obj.subscriber.subscriptions["com.ohoang7.premium.yearly"] = ohoang7;
obj.subscriber.entitlements["Gold"] = vuong2023;

// Thêm entitlement vip+watch_vip để mở 15s video
obj.subscriber.subscriptions["vip+watch_vip"] = ohoang7;
obj.subscriber.entitlements["vip+watch_vip"] = vuong2023;

$done({ body: JSON.stringify(obj) });