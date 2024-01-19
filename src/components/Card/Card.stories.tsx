import { StoryObj } from '@storybook/react';
import Card from "./Card";
import Background from '@/foundations/Background';
import styled from 'styled-components';
import Typography from '@/foundations/Typography/Typography';

export default {
  title: "Components/Card",
  component: Card,
};

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    icon: "shopping",
    theme: "dark",
    title: "쇼핑"
  }
}

export const AllTypes = () => (
  <>
    <Background theme="dark">
      <TypeBox>
        <CardBox>
          <Card icon="shopping" theme="dark" title='쇼핑' />
          <Typography text='Default' type='h0' />
        </CardBox>
        <CardBox>
          <Card icon="travel" theme="dark" title='여행' />
        </CardBox>
      </TypeBox>
    </Background>
    <Background theme="light">
      <TypeBox>
        <CardBox>
          <Card icon="shopping" theme="light" title='쇼핑' />
          <Typography text='Default' type='h0' />
        </CardBox>
        <CardBox>
          <Card icon="travel" theme="light" title='여행' />
        </CardBox>
      </TypeBox>
    </Background>
  </>
)

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
`;

const CardBox = styled.div`
  display: flex;
  gap: 2rem;
`;