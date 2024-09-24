#!/bin/bash
for dir in ecommerce-frontend inventory-service order-service payment-service product-service; do
  (cd "$dir" && yarn start &)
done
