const blogs = [
  {
    title: "Wrapping React Routers v6",
    // coverUrl: require("../static/img/reactme.jpg"),
    coverUrl: "",
    coverUrlAlt: "React Routers v6 Cover",
    contents: [
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iste illo blanditiis amet nihil perspiciatis repellendus sapiente ut, itaque, minima sed ullam quae porro. Voluptate, dolorem! Ipsum laboriosam mollitia ea minima dolor vero voluptatem nemo suscipit. Quos id non nemo cumque eaque vel corporis rem quibusdam illum eum dicta, repellat iste, quas ipsa pariatur harum? Consectetur autem sunt sit temporibus iure eveniet perspiciatis eaque ratione libero, mollitia, praesentium adipisci officiis debitis ad distinctio sequi. Dolorum non qui dolores architecto inventore quae nam nesciunt maxime obcaecati, voluptate asperiores quibusdam consequatur itaque cum. Nulla ipsam esse consequatur error cum accusamus tenetur sapiente facere quisquam? Inventore non officia accusamus optio id distinctio quae. Sit facilis, magnam voluptatibus harum est quibusdam consequatur aliquid dicta accusamus minima hic cumque, ipsam inventore aut incidunt, dolore reprehenderit maxime dolorem.",
      },
      {
        type: "image",
        imageUrl: require("../static/img/tl_banner-blue.png"),
        imageUrlAlt: "React Routers v6 Cover",
      },
      {
        type: "code",
        text: `
          const {
            isLoading: metConditionsIsLoading,
            data: metConditions,
            error: metConditionsError,
          } = useCalculatedMetConditions({
            auth,
            projectId: selectedPolygonProjectId,
            height,
            startDateTime: dateRangeValue ? dateRangeValue[0] : null,
            endDateTime: dateRangeValue ? dateRangeValue[1] : null,
            EOXLidarEndDate,
          });
        `,
      },
    ],
  },
];

export default blogs;
