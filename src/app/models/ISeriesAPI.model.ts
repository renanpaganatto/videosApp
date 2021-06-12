  /* eslint-disable @typescript-eslint/naming-convention */
export interface ISeriesApi {
  poster_path?: string;
  overview?: string;
  genre_ids?: number[];
  id?: number;
  original_name?: string;
  original_language?: string;
  backdrop_path?: string;
  popularity?: number;
  name?: string;
  vote_count?: number;
  vote_average?: number;
  first_air_date?: string;
}

export interface IListaSeries {
  page: number;
  results: ISeriesApi[];
  total_results: number;
  total_pages: number;

}
