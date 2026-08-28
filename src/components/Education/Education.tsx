import { SITE } from "@/data/site";
import RecordList from "@/components/RecordList/RecordList";

export default function Education() {
  const rows = SITE.education.map((entry) => ({
    primary: entry.school,
    secondary: `${entry.degree} — ${entry.program}`,
    period: entry.years,
  }));

  return <RecordList label="Education" rows={rows} />;
}
