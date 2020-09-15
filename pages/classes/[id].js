import { useRouter } from "next/router";
import ClassDetails from "../../components/ClassDetails";

export default function ClassId() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <ClassDetails classId={id} />
    </div>
  );
}
