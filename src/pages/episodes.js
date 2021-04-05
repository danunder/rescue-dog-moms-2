import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';

const Episodes = ({data}) => {

  
  const headerStyle = {
    color: '#993f3f'
  }

  const imgStyle = {
    width: '8rem'
  }

  const listStyle = {
    listStyleType: 'none',
    margin: `0 auto`,
    maxWidth: 650,
    padding: `0 1rem`
  }

  const listItemStyle = {

  }

  return (
    <Layout>
      <Header>
        
      </Header>
      
      <ul style={listStyle}>
        {data.allBuzzsproutPodcastEpisode.edges.map(({ node }) => (
          <li style={listItemStyle} key={node.id}>
            <article>
            <img style={imgStyle} src={node.artwork_url} alt="episode artwork"></img>
              <h2 style={headerStyle}>
                Episode {node.title}
              </h2>
              
              
            </article>
          </li>
        ))}
      </ul>
    </Layout>
    
  );
};

export default Episodes;

export const query = graphql`
  query PodcastPageQuery {
    allBuzzsproutPodcastEpisode {
      edges {
        node {
          id
          episode_number
          artwork_url
          audio_url
          published_at(formatString: "DD/MM/YYYY")
          title
          description
        }
      }
    }
  }
`;
