export const curatorAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_curatorFactory',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'ACCESS_NOT_ALLOWED',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ADDRESS_ZERO',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ALREADY_INITIALIZED',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CANNOT_SET_SAME_PAUSED_STATE',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CANNOT_UPDATE_CURATION_LIMIT_DOWN',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CURATION_FROZEN',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CURATION_PAUSED',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DELEGATE_CALL_FAILED',
    type: 'error',
  },
  {
    inputs: [],
    name: 'INITIALIZING',
    type: 'error',
  },
  {
    inputs: [],
    name: 'INVALID_INPUT_LENGTH',
    type: 'error',
  },
  {
    inputs: [],
    name: 'INVALID_TARGET',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'impl',
        type: 'address',
      },
    ],
    name: 'INVALID_UPGRADE',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NOT_INITIALIZING',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ONLY_CALL',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ONLY_CURATOR',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ONLY_DELEGATECALL',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ONLY_OWNER',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ONLY_PENDING_OWNER',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ONLY_PROXY',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ONLY_UUPS',
    type: 'error',
  },
  {
    inputs: [],
    name: 'PASS_REQUIRED',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TOKEN_HAS_NO_OWNER',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TOO_MANY_ENTRIES',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UNSUPPORTED_UUID',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'setCurator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'expectedCurator',
        type: 'address',
      },
    ],
    name: 'WRONG_CURATOR_FOR_LISTING',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isPaused',
        type: 'bool',
      },
    ],
    name: 'CurationPauseUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'version',
        type: 'uint256',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'curator',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'curatedAddress',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'selectedTokenId',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'curator',
            type: 'address',
          },
          {
            internalType: 'uint16',
            name: 'curationTargetType',
            type: 'uint16',
          },
          {
            internalType: 'int32',
            name: 'sortOrder',
            type: 'int32',
          },
          {
            internalType: 'bool',
            name: 'hasTokenId',
            type: 'bool',
          },
          {
            internalType: 'uint16',
            name: 'chainId',
            type: 'uint16',
          },
        ],
        indexed: false,
        internalType: 'struct ICurator.Listing',
        name: 'listing',
        type: 'tuple',
      },
    ],
    name: 'ListingAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'curator',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'curatedAddress',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'selectedTokenId',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'curator',
            type: 'address',
          },
          {
            internalType: 'uint16',
            name: 'curationTargetType',
            type: 'uint16',
          },
          {
            internalType: 'int32',
            name: 'sortOrder',
            type: 'int32',
          },
          {
            internalType: 'bool',
            name: 'hasTokenId',
            type: 'bool',
          },
          {
            internalType: 'uint16',
            name: 'chainId',
            type: 'uint16',
          },
        ],
        indexed: false,
        internalType: 'struct ICurator.Listing',
        name: 'listing',
        type: 'tuple',
      },
    ],
    name: 'ListingRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Locked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'canceledOwner',
        type: 'address',
      },
    ],
    name: 'OwnerCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'pendingOwner',
        type: 'address',
      },
    ],
    name: 'OwnerPending',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'prevOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'ScheduledFreeze',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'SetRenderer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenPass',
        type: 'address',
      },
    ],
    name: 'TokenPassUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Unlocked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newLimit',
        type: 'uint256',
      },
    ],
    name: 'UpdatedCurationLimit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'int32[]',
        name: 'sorts',
        type: 'int32[]',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'updatedBy',
        type: 'address',
      },
    ],
    name: 'UpdatedSortOrder',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'impl',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'CURATION_TYPE_CONTRACT',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CURATION_TYPE_CURATION_CONTRACT',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CURATION_TYPE_GENERIC',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CURATION_TYPE_NFT_CONTRACT',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CURATION_TYPE_NFT_ITEM',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CURATION_TYPE_WALLET',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CURATION_TYPE_ZORA_EDITION',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'curatedAddress',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'selectedTokenId',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'curator',
            type: 'address',
          },
          {
            internalType: 'uint16',
            name: 'curationTargetType',
            type: 'uint16',
          },
          {
            internalType: 'int32',
            name: 'sortOrder',
            type: 'int32',
          },
          {
            internalType: 'bool',
            name: 'hasTokenId',
            type: 'bool',
          },
          {
            internalType: 'uint16',
            name: 'chainId',
            type: 'uint16',
          },
        ],
        internalType: 'struct ICurator.Listing[]',
        name: 'listings',
        type: 'tuple[]',
      },
    ],
    name: 'addListings',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'listingId',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'listingIds',
        type: 'uint256[]',
      },
    ],
    name: 'burnBatch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cancelOwnershipTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contractURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'curationLimit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'curationPass',
    outputs: [
      {
        internalType: 'contract IERC721Upgradeable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'freezeAt',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'frozenAt',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getListing',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'curatedAddress',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'selectedTokenId',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'curator',
            type: 'address',
          },
          {
            internalType: 'uint16',
            name: 'curationTargetType',
            type: 'uint16',
          },
          {
            internalType: 'int32',
            name: 'sortOrder',
            type: 'int32',
          },
          {
            internalType: 'bool',
            name: 'hasTokenId',
            type: 'bool',
          },
          {
            internalType: 'uint16',
            name: 'chainId',
            type: 'uint16',
          },
        ],
        internalType: 'struct ICurator.Listing',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getListings',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'curatedAddress',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'selectedTokenId',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'curator',
            type: 'address',
          },
          {
            internalType: 'uint16',
            name: 'curationTargetType',
            type: 'uint16',
          },
          {
            internalType: 'int32',
            name: 'sortOrder',
            type: 'int32',
          },
          {
            internalType: 'bool',
            name: 'hasTokenId',
            type: 'bool',
          },
          {
            internalType: 'uint16',
            name: 'chainId',
            type: 'uint16',
          },
        ],
        internalType: 'struct ICurator.Listing[]',
        name: 'activeListings',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'idToListing',
    outputs: [
      {
        internalType: 'address',
        name: 'curatedAddress',
        type: 'address',
      },
      {
        internalType: 'uint96',
        name: 'selectedTokenId',
        type: 'uint96',
      },
      {
        internalType: 'address',
        name: 'curator',
        type: 'address',
      },
      {
        internalType: 'uint16',
        name: 'curationTargetType',
        type: 'uint16',
      },
      {
        internalType: 'int32',
        name: 'sortOrder',
        type: 'int32',
      },
      {
        internalType: 'bool',
        name: 'hasTokenId',
        type: 'bool',
      },
      {
        internalType: 'uint16',
        name: 'chainId',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_symbol',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_curationPass',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_pause',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_curationLimit',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_renderer',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_rendererInitializer',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'curatedAddress',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'selectedTokenId',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'curator',
            type: 'address',
          },
          {
            internalType: 'uint16',
            name: 'curationTargetType',
            type: 'uint16',
          },
          {
            internalType: 'int32',
            name: 'sortOrder',
            type: 'int32',
          },
          {
            internalType: 'bool',
            name: 'hasTokenId',
            type: 'bool',
          },
          {
            internalType: 'uint16',
            name: 'chainId',
            type: 'uint16',
          },
        ],
        internalType: 'struct ICurator.Listing[]',
        name: '_initialListings',
        type: 'tuple[]',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'locked',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numAdded',
    outputs: [
      {
        internalType: 'uint40',
        name: '',
        type: 'uint40',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numRemoved',
    outputs: [
      {
        internalType: 'uint40',
        name: '',
        type: 'uint40',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renderer',
    outputs: [
      {
        internalType: 'contract IMetadataRenderer',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'safeTransferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_setPaused',
        type: 'bool',
      },
    ],
    name: 'setCurationPaused',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'checkTokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newLimit',
        type: 'uint256',
      },
    ],
    name: 'updateCurationLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721Upgradeable',
        name: '_curationPass',
        type: 'address',
      },
    ],
    name: 'updateCurationPass',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newRenderer',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_rendererInitializer',
        type: 'bytes',
      },
    ],
    name: 'updateRenderer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'tokenIds',
        type: 'uint256[]',
      },
      {
        internalType: 'int32[]',
        name: 'sortOrders',
        type: 'int32[]',
      },
    ],
    name: 'updateSortOrders',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newImpl',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newImpl',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const
