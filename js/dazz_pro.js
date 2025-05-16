$done({
  body: JSON.stringify({
    "subscriber": {
      "entitlements": {
        "pro": {
          "expires_date": "2099-12-31T23:59:59Z",
          "product_identifier": "com.dazzcam.pro",
          "purchase_date": "2025-05-16T00:00:00Z"
        }
      },
      "first_seen": "2025-05-16T00:00:00Z",
      "last_seen": "2025-05-16T00:00:00Z",
      "management_url": null,
      "non_subscriptions": {},
      "original_app_user_id": "random_uuid",
      "original_application_version": "1.0",
      "original_purchase_date": "2025-05-16T00:00:00Z",
      "subscriptions": {
        "com.dazzcam.pro": {
          "billing_issues_detected_at": null,
          "expires_date": "2099-12-31T23:59:59Z",
          "is_sandbox": false,
          "original_purchase_date": "2025-05-16T00:00:00Z",
          "period_type": "normal",
          "purchase_date": "2025-05-16T00:00:00Z",
          "store": "app_store"
        }
      }
    }
  })
});
