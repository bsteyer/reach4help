import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

/* Simple Consts */
const { Text } = Typography;

/* Component Declaration */
const BlogPost: React.FC<BlogPostProps> = ({ title, description }) => (
  <BlogPostWrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </BlogPostWrapper>
);

/* styled-component declarations */

const BlogPostWrapper = styled.div`
  margin: 5px;
`;
const Title = styled.div`
  font-size: 125%;
`;
const Description = styled.div`
  font-style: italic;
`;

/* Complex consts -- documentation coming soon*/

/* interface declaration */

interface BlogPostProps {
  title: string;
  description: string;
}

export default BlogPost;
