import { useParams } from "@solidjs/router";
import { createSignal, createEffect, Show } from "solid-js";
import { csrActivities } from "../../data/csrData";
import { CSRActivity } from "../../types/csr";
import {
  CSRDetailContainer,
  CSRDetailImage,
  CSRDetailTitle,
  CSRDetailDescription,
  CSRDetailInfo,
} from "./CSRDetail.styled";

const CSRDetail = () => {
  const params = useParams();
  const [csrActivity, setCsrActivity] = createSignal<CSRActivity | null>(null);

  createEffect(() => {
    const activity = csrActivities.find((item) => item.id === params.id);
    setCsrActivity(activity || null);
  });

  return (
    <CSRDetailContainer>
      <Show when={csrActivity()}>
        {(activity) => (
          <>
            <CSRDetailImage src={activity().image} alt={activity().title} />
            <CSRDetailTitle>{activity().title}</CSRDetailTitle>
            <CSRDetailDescription>
              {activity().fullDescription}
            </CSRDetailDescription>
            <CSRDetailInfo>
              <p>
                <strong>実施日:</strong> {activity().date}
              </p>
              <p>
                <strong>参加者:</strong> {activity().participants}
              </p>
              <p>
                <strong>影響:</strong> {activity().impact}
              </p>
            </CSRDetailInfo>
          </>
        )}
      </Show>
    </CSRDetailContainer>
  );
};

export default CSRDetail;
