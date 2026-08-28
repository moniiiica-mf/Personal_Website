import { SITE } from "@/data/site";
import RecordList from "@/components/RecordList/RecordList";

export default function Experience() {
  const rows = SITE.experience.map((entry) => ({
    primary: entry.role,
    secondary: entry.company,
    period: entry.period,
  }));

  return <RecordList label="Work experience" rows={rows} />;
}
