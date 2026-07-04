# Food Expiry Tracker Specifications

**Version**: 1
**Author:**: Talia Sirianni
**Created on:** 7/3/2026

## Changelog

| Date     | Author         | Change Description          |
| -------- | -------------- | --------------------------- |
| 7/3/2026 | Talia Sirianni | Published the first version |

## Problem

- Food expires in my pantry, fridge, freezer, etc. unnoticed.
- There's no tracking system.
- My memory fails, and sticky/paper notes are too messy.
- Digital notes are a hassle to maintain with typical notetaking apps like notepad, your phone's notes app, or even more advanced options like Obsidian.

## User(s)

- Me (user #1); currently tracks nothing
- My family could test this

## Core concept

- Present a Virtual Kitchen that the user can acces to model and manage their inventory as well as track expiration of items
- Divide food inventory into user-created groups modeling their real storage (fridge, pantry, freezer, etc.)

## User Flow (Adding New Items)

1. User goes to add a new/existing product to their virtual kitchen (they could be in the grocery store/updating their app with their current inventory/etc.)
2. User enters manually
   - Name
   - Expiration Date
   - Group in the Kitchen the Item goes (Fridge, Pantry, etc.)
3. Virtual Kitchen (the correct group) is updated with the added product

## Core features

- Create/edit/delete kitchen groups
- Item entry: name + expiry date + group
- Item list (inventory) should be sorted by soonest-expiring
- "Expired" status is derived (expiry_date < today), never a stored flag. This is redundant. Calculation is preferred, automated and reliable
- Expiration View of Inventory: all expired items across groups in one list, showing each item's group

## Notifications

- Alert the day before expiry
- Snooze: re-alert in 24h; if item expires tomorrow, re-alert at midnight instead
- One final notification on expiry day, then silence
- Expired items keep a persistent visual state until resolved (a red highlight)

## Item resolution

Consume or discard: both remove the item; distinction logged for v2 waste stats

## Data for Suggestions Feature

USDA FoodKeeper dataset (400+ items, shelf life by storage method), bundled locally as JSON. It is offline, no third-party API dependency

## Features Not in v1

- Barcode scanning (barcodes don't encode expiry dates)
- Fuzzy-matching typed names to FoodKeeper (picker only)
- Dateless items
- Recipe suggestions
- Photos
- Sharing/multi-user
- Waste stats

## Platform/Techstack

- React Native + Expo
  - iOS, Android, web from one codebase
- Push notifications on mobile; in-app "expiring soon" banner on web

## Portfolio artifacts

- Live web demo link
- 30-sec demo GIF in README
- DESIGN.md: show the evolution of this project's design
