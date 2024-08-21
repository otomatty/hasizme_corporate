import { BlogContainer, BlogPost, BlogTitle, BlogContent } from "./Blog.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Blog() {
  return (
    <>
      <Header />
      <BlogContainer>
        <h2>Blog</h2>
        <BlogPost>
          <BlogTitle>
            Understanding the Importance of Quality Construction Materials
          </BlogTitle>
          <BlogContent>
            Quality construction materials are essential for ensuring the
            durability and longevity of any building project. In this post, we
            explore the key factors to consider when selecting materials for
            your next project.
          </BlogContent>
        </BlogPost>
        <BlogPost>
          <BlogTitle>
            Top Trends in the Construction Industry for 2023
          </BlogTitle>
          <BlogContent>
            The construction industry is constantly evolving. In this post, we
            highlight the top trends that are shaping the industry in 2023, from
            sustainable building practices to the latest technological
            advancements.
          </BlogContent>
        </BlogPost>
        <BlogPost>
          <BlogTitle>
            How to Choose the Right Construction Materials for Your Project
          </BlogTitle>
          <BlogContent>
            Choosing the right construction materials can be a daunting task. In
            this post, we provide a comprehensive guide to help you make
            informed decisions and select the best materials for your specific
            needs.
          </BlogContent>
        </BlogPost>
      </BlogContainer>
      <Footer />
    </>
  );
}

export default Blog;
