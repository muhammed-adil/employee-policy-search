# Employee Policy Search using Azure AI Search

## Project Overview
This project implements an intelligent search system for employee HR policies using Azure AI Search and Azure Static Web Apps.

## Technologies Used
- Azure AI Search
- Azure Blob Storage
- Azure Static Web Apps
- HTML, CSS, JavaScript

## Features
- Full-text search over employee policies
- Category-based results
- Cloud-hosted search service
- Web-based UI

## Architecture
1. Policy documents stored in Azure Blob Storage
2. Azure AI Search indexes the data
3. Static Web App queries the search index via REST API
4. Results displayed in UI

## How to Run
Open the deployed Static Web App URL and search for policies like:
- leave
- attendance
- insurance

## Deployment
Deployed using GitHub Actions and Azure Static Web Apps
