SELECT o.id, o.sale_id, os.name AS order_status, o.date_created FROM cb_order o
JOIN order_status os ON o.status_id = os.id
WHERE os.name = 'OPEN';