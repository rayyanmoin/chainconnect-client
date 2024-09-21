export const getAllPlatformPostsQuery = (params) => {
  return {
    query: `{
        posts:postCreateds {
            uri
            transactionHash
            sellValue
            sender
            metadata
            id
            buyStatus
            blockTimestamp
            blockNumber
            ChainConnect_id
        }
    }`,
  };
};
