import { Form } from "../Form/Form";

const id = "pinkpoink";
const endpoint = `${process.env.NEXT_PUBLIC_YT_VIDEOES}?part=snippet&id=${id}&key=${process.env.NEXT_PUBLIC_API_KEY}`;

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

export const FetchVideo = () => {
  return (
    <div>
      <Form />
    </div>
  );
};
