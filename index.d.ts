declare module "*.png";

type Story = {
  imageUri: string;
  postedTime: string;
};

type Comment = {
  created_time: string;
  text: string;
  from: {
    username: string;
    profile_picture: string;
    id: string;
    full_name: string;
  };
  id: string;
};

type User = {
  id: string;
  imageUri: string;
  name: string;
  stories: Story[];
  comments: {
    count: number;
    data: Comment[];
  };
};

declare type TabNavigatorParamList = {
  Home: undefined;
  Search: undefined;
  Reels: undefined;
};

declare type HomeStackParamList = {
  HomeScreen: undefined;
  StoryScreen: { user: user };
};

declare type ReelsStackParamList = {
  ReelsScreen: undefined;
};

declare type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList>;
