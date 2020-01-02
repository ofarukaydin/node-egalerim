import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AracResimleri = {
   __typename?: 'AracResimleri',
  id: Scalars['ID'],
  image: Scalars['String'],
  stoklar?: Maybe<Stoklar>,
  stoklarId?: Maybe<Scalars['Int']>,
};

export type Cariler = {
   __typename?: 'Cariler',
  id: Scalars['ID'],
  isim: Scalars['String'],
  tc_no: Scalars['String'],
  vergi_no?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  tel_no?: Maybe<Scalars['String']>,
  adres?: Maybe<Scalars['String']>,
  posta_kodu?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['Int']>,
  user?: Maybe<User>,
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  accessToken: Scalars['String'],
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  stokekle: Stoklar,
  cariekle: Cariler,
  logout: Scalars['Boolean'],
  revokeRefreshTokensForUser: Scalars['Boolean'],
  login: LoginResponse,
  register: LoginResponse,
};


export type MutationStokekleArgs = {
  tur?: Maybe<Scalars['String']>,
  aciklama?: Maybe<Scalars['String']>,
  toplam?: Maybe<Scalars['String']>,
  kdv?: Maybe<Scalars['String']>,
  alisFiyati?: Maybe<Scalars['String']>,
  saseNo?: Maybe<Scalars['String']>,
  motorNo?: Maybe<Scalars['String']>,
  alisTarihi?: Maybe<Scalars['String']>,
  ruhsatNo?: Maybe<Scalars['String']>,
  yil?: Maybe<Scalars['String']>,
  model?: Maybe<Scalars['String']>,
  marka?: Maybe<Scalars['String']>,
  plaka: Scalars['String']
};


export type MutationCariekleArgs = {
  postaKodu?: Maybe<Scalars['String']>,
  adres?: Maybe<Scalars['String']>,
  telNo?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  vergiNo?: Maybe<Scalars['String']>,
  tcNo: Scalars['String'],
  isim: Scalars['String']
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int']
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationRegisterArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  stoklar: Array<Stoklar>,
  stok: Stoklar,
  cariler: Array<Cariler>,
  cari: Cariler,
  me: User,
};


export type QueryStokArgs = {
  id: Scalars['Float']
};


export type QueryCariArgs = {
  id: Scalars['Float']
};

export type RuhsatResimleri = {
   __typename?: 'RuhsatResimleri',
  id: Scalars['ID'],
  image: Scalars['String'],
  stoklar?: Maybe<Stoklar>,
  stoklarId?: Maybe<Scalars['Int']>,
};

export type Stoklar = {
   __typename?: 'Stoklar',
  id: Scalars['ID'],
  plaka: Scalars['String'],
  marka?: Maybe<Scalars['String']>,
  model?: Maybe<Scalars['String']>,
  yil?: Maybe<Scalars['String']>,
  ruhsat_no?: Maybe<Scalars['String']>,
  alis_tarihi?: Maybe<Scalars['String']>,
  motor_no?: Maybe<Scalars['String']>,
  sase_no?: Maybe<Scalars['String']>,
  alis_fiyati?: Maybe<Scalars['String']>,
  kdv?: Maybe<Scalars['String']>,
  toplam?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  aciklama?: Maybe<Scalars['String']>,
  tur?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['Int']>,
  arac_resimleri: Array<AracResimleri>,
  ruhsat_resimleri: Array<RuhsatResimleri>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  cariler: Array<Cariler>,
  stoklar: Array<Stoklar>,
  profileId?: Maybe<Scalars['Int']>,
  profile: UserProfile,
};

export type UserProfile = {
   __typename?: 'UserProfile',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  tc_no?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};
export type CariQueryVariables = {
  id: Scalars['Float']
};


export type CariQuery = (
  { __typename?: 'Query' }
  & { cari: (
    { __typename?: 'Cariler' }
    & Pick<Cariler, 'id' | 'isim' | 'tc_no' | 'vergi_no' | 'email' | 'tel_no' | 'adres' | 'posta_kodu' | 'userId'>
  ) }
);

export type CariEkleMutationVariables = {
  tcNo: Scalars['String'],
  isim: Scalars['String'],
  postaKodu?: Maybe<Scalars['String']>,
  adres?: Maybe<Scalars['String']>,
  telNo?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  vergiNo?: Maybe<Scalars['String']>
};


export type CariEkleMutation = (
  { __typename?: 'Mutation' }
  & { cariekle: (
    { __typename?: 'Cariler' }
    & Pick<Cariler, 'tc_no' | 'isim' | 'id' | 'posta_kodu' | 'adres' | 'tel_no' | 'email' | 'vergi_no' | 'userId'>
  ) }
);

export type GetCarilerQueryVariables = {};


export type GetCarilerQuery = (
  { __typename?: 'Query' }
  & { cariler: Array<(
    { __typename?: 'Cariler' }
    & Pick<Cariler, 'id' | 'isim' | 'tc_no' | 'vergi_no' | 'email' | 'tel_no' | 'adres' | 'posta_kodu' | 'userId'>
  )> }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);

export type RegisterMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  ) }
);

export type StokQueryVariables = {
  id: Scalars['Float']
};


export type StokQuery = (
  { __typename?: 'Query' }
  & { stok: (
    { __typename?: 'Stoklar' }
    & Pick<Stoklar, 'id' | 'plaka' | 'marka' | 'model' | 'yil' | 'ruhsat_no' | 'alis_tarihi' | 'motor_no' | 'sase_no' | 'kdv' | 'toplam' | 'aciklama' | 'tur' | 'userId'>
  ) }
);

export type StokEkleMutationVariables = {
  plaka: Scalars['String'],
  marka?: Maybe<Scalars['String']>,
  model?: Maybe<Scalars['String']>,
  yil?: Maybe<Scalars['String']>,
  ruhsatNo?: Maybe<Scalars['String']>,
  alisTarihi?: Maybe<Scalars['String']>,
  motorNo?: Maybe<Scalars['String']>,
  saseNo?: Maybe<Scalars['String']>,
  alisFiyati?: Maybe<Scalars['String']>,
  kdv?: Maybe<Scalars['String']>,
  toplam?: Maybe<Scalars['String']>,
  aciklama?: Maybe<Scalars['String']>,
  tur?: Maybe<Scalars['String']>
};


export type StokEkleMutation = (
  { __typename?: 'Mutation' }
  & { stokekle: (
    { __typename?: 'Stoklar' }
    & Pick<Stoklar, 'plaka' | 'marka' | 'model' | 'yil' | 'ruhsat_no' | 'alis_tarihi' | 'motor_no' | 'sase_no' | 'alis_fiyati' | 'kdv' | 'toplam' | 'aciklama' | 'tur' | 'userId'>
  ) }
);

export type GetStoklarQueryVariables = {};


export type GetStoklarQuery = (
  { __typename?: 'Query' }
  & { stoklar: Array<(
    { __typename?: 'Stoklar' }
    & Pick<Stoklar, 'id' | 'plaka' | 'marka' | 'model' | 'yil' | 'ruhsat_no' | 'alis_tarihi' | 'motor_no' | 'sase_no' | 'alis_fiyati' | 'kdv' | 'toplam' | 'aciklama' | 'tur' | 'userId'>
  )> }
);

export const CariDocument = gql`
    query Cari($id: Float!) {
  cari(id: $id) {
    id
    isim
    tc_no
    vergi_no
    email
    tel_no
    adres
    posta_kodu
    userId
  }
}
    `;

    export function useCariQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CariQuery, CariQueryVariables>) {
      return ApolloReactHooks.useQuery<CariQuery, CariQueryVariables>(CariDocument, baseOptions);
    }
      export function useCariLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CariQuery, CariQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<CariQuery, CariQueryVariables>(CariDocument, baseOptions);
      }
      
export type CariQueryHookResult = ReturnType<typeof useCariQuery>;
export type CariQueryResult = ApolloReactCommon.QueryResult<CariQuery, CariQueryVariables>;
export const CariEkleDocument = gql`
    mutation CariEkle($tcNo: String!, $isim: String!, $postaKodu: String, $adres: String, $telNo: String, $email: String, $vergiNo: String) {
  cariekle(tcNo: $tcNo, isim: $isim, postaKodu: $postaKodu, adres: $adres, telNo: $telNo, email: $email, vergiNo: $vergiNo) {
    tc_no
    isim
    id
    posta_kodu
    adres
    tel_no
    email
    vergi_no
    userId
  }
}
    `;
export type CariEkleMutationFn = ApolloReactCommon.MutationFunction<CariEkleMutation, CariEkleMutationVariables>;

    export function useCariEkleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CariEkleMutation, CariEkleMutationVariables>) {
      return ApolloReactHooks.useMutation<CariEkleMutation, CariEkleMutationVariables>(CariEkleDocument, baseOptions);
    }
export type CariEkleMutationHookResult = ReturnType<typeof useCariEkleMutation>;
export type CariEkleMutationResult = ApolloReactCommon.MutationResult<CariEkleMutation>;
export type CariEkleMutationOptions = ApolloReactCommon.BaseMutationOptions<CariEkleMutation, CariEkleMutationVariables>;
export const GetCarilerDocument = gql`
    query GetCariler {
  cariler {
    id
    isim
    tc_no
    vergi_no
    email
    tel_no
    adres
    posta_kodu
    userId
  }
}
    `;

    export function useGetCarilerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCarilerQuery, GetCarilerQueryVariables>) {
      return ApolloReactHooks.useQuery<GetCarilerQuery, GetCarilerQueryVariables>(GetCarilerDocument, baseOptions);
    }
      export function useGetCarilerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCarilerQuery, GetCarilerQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetCarilerQuery, GetCarilerQueryVariables>(GetCarilerDocument, baseOptions);
      }
      
export type GetCarilerQueryHookResult = ReturnType<typeof useGetCarilerQuery>;
export type GetCarilerQueryResult = ApolloReactCommon.QueryResult<GetCarilerQuery, GetCarilerQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

    export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
      return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
    }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

    export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
      return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
    }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
  }
}
    `;

    export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
      return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
    }
      export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
      
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    accessToken
    user {
      id
      email
    }
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

    export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
      return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
    }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const StokDocument = gql`
    query Stok($id: Float!) {
  stok(id: $id) {
    id
    plaka
    marka
    model
    yil
    ruhsat_no
    alis_tarihi
    motor_no
    sase_no
    alis_tarihi
    kdv
    toplam
    aciklama
    tur
    userId
  }
}
    `;

    export function useStokQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StokQuery, StokQueryVariables>) {
      return ApolloReactHooks.useQuery<StokQuery, StokQueryVariables>(StokDocument, baseOptions);
    }
      export function useStokLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StokQuery, StokQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<StokQuery, StokQueryVariables>(StokDocument, baseOptions);
      }
      
export type StokQueryHookResult = ReturnType<typeof useStokQuery>;
export type StokQueryResult = ApolloReactCommon.QueryResult<StokQuery, StokQueryVariables>;
export const StokEkleDocument = gql`
    mutation StokEkle($plaka: String!, $marka: String, $model: String, $yil: String, $ruhsatNo: String, $alisTarihi: String, $motorNo: String, $saseNo: String, $alisFiyati: String, $kdv: String, $toplam: String, $aciklama: String, $tur: String) {
  stokekle(plaka: $plaka, marka: $marka, model: $model, yil: $yil, ruhsatNo: $ruhsatNo, alisTarihi: $alisTarihi, motorNo: $motorNo, saseNo: $saseNo, alisFiyati: $alisFiyati, kdv: $kdv, toplam: $toplam, aciklama: $aciklama, tur: $tur) {
    plaka
    marka
    model
    yil
    ruhsat_no
    alis_tarihi
    motor_no
    sase_no
    alis_fiyati
    kdv
    toplam
    aciklama
    tur
    userId
  }
}
    `;
export type StokEkleMutationFn = ApolloReactCommon.MutationFunction<StokEkleMutation, StokEkleMutationVariables>;

    export function useStokEkleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StokEkleMutation, StokEkleMutationVariables>) {
      return ApolloReactHooks.useMutation<StokEkleMutation, StokEkleMutationVariables>(StokEkleDocument, baseOptions);
    }
export type StokEkleMutationHookResult = ReturnType<typeof useStokEkleMutation>;
export type StokEkleMutationResult = ApolloReactCommon.MutationResult<StokEkleMutation>;
export type StokEkleMutationOptions = ApolloReactCommon.BaseMutationOptions<StokEkleMutation, StokEkleMutationVariables>;
export const GetStoklarDocument = gql`
    query GetStoklar {
  stoklar {
    id
    plaka
    marka
    model
    yil
    ruhsat_no
    alis_tarihi
    motor_no
    sase_no
    alis_fiyati
    kdv
    toplam
    aciklama
    tur
    userId
  }
}
    `;

    export function useGetStoklarQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStoklarQuery, GetStoklarQueryVariables>) {
      return ApolloReactHooks.useQuery<GetStoklarQuery, GetStoklarQueryVariables>(GetStoklarDocument, baseOptions);
    }
      export function useGetStoklarLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStoklarQuery, GetStoklarQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetStoklarQuery, GetStoklarQueryVariables>(GetStoklarDocument, baseOptions);
      }
      
export type GetStoklarQueryHookResult = ReturnType<typeof useGetStoklarQuery>;
export type GetStoklarQueryResult = ApolloReactCommon.QueryResult<GetStoklarQuery, GetStoklarQueryVariables>;