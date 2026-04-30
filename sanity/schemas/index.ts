// Sanity content schemas for the Code Victorian website.
//
// One singleton per page (only ever one document of each), plus a
// site-wide siteSettings singleton for nav, brand, and shared assets.
//
// Adding a new content type:
//   1. Drop a new file alongside this one (e.g. eventsPage.ts).
//   2. Import it here and append to schemaTypes below.
//   3. Restart `npm run dev` and the Studio at /studio picks it up.

import { siteSettings } from "./siteSettings"
import { homePage } from "./homePage"
import { petitionPage } from "./petitionPage"
import { issuesPage } from "./issuesPage"
import { aboutPage } from "./aboutPage"
import { donatePage } from "./donatePage"
import { memberPage } from "./memberPage"
import { joinPage } from "./joinPage"
import { volunteerPage } from "./volunteerPage"
import { contactPage } from "./contactPage"
import { privacyPage } from "./privacyPage"

export const schemaTypes = [
  siteSettings,
  homePage,
  petitionPage,
  issuesPage,
  aboutPage,
  donatePage,
  memberPage,
  joinPage,
  volunteerPage,
  contactPage,
  privacyPage,
]
