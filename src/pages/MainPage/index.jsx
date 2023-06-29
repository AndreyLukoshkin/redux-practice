import DetailedCard from "../../components/DetailedCard";
import Layout from "../../components/Layout";

const MainPage = () => {
  return (
    <Layout nickName="Andrii" id={1}>
      <div>main page</div>
      <DetailedCard
        userName="Andrii"
        userId={1}
        imgUrl="https://imgix.ranker.com/list_img_v2/3323/2523323/original/ancient-pict-facts-u1"
        likes={10}
        isLikedByYou={true}
        comments={[
          {
            text: "asddasd",
            nickName: "aaadd",
          },
          {
            text: "asddasd",
            nickName: "aaadd",
          },
          {
            text: "asddasd",
            nickName: "aaadd",
          },
          {
            text: "asddasd",
            nickName: "aaadd",
          },
          {
            text: "asddasd",
            nickName: "aaadd",
          },
        ]}
      />
    </Layout>
  );
};

export default MainPage;
