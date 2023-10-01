import jwtFetch from './jwt';
import { RECEIVE_USER_LOGOUT } from './session';

const RECEIVE_TWEETS = "tweets/RECEIVE_TWEETS";
const RECEIVE_USER_TWEETS = "tweets/RECEIVE_USER_TWEETS";
const RECEIVE_NEW_TWEET = "tweets/RECEIVE_NEW_TWEET";
const RECEIVE_TWEET_ERRORS = "tweets/RECEIVE_TWEET_ERRORS";
const CLEAR_TWEET_ERRORS = "tweets/CLEAR_TWEET_ERRORS";

const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});

const receiveUserTweets = tweets => ({
  type: RECEIVE_USER_TWEETS,
  tweets
});

const receiveNewTweet = tweet => ({
  type: RECEIVE_NEW_TWEET,
  tweet
});

const receiveErrors = errors => ({
  type: RECEIVE_TWEET_ERRORS,
  errors
});

export const clearTweetErrors = errors => ({
    type: CLEAR_TWEET_ERRORS,
    errors
});