import 'package:bloc/bloc.dart';
import 'package:domain/usecase/advertise_notice_usecase.dart';
import 'package:presentation/cukcat_home/cukcat_home_event.dart';
import 'package:presentation/cukcat_home/cukcat_home_view_state.dart';

class CukCatHomeBloc extends Bloc<CukCatHomeEvent, CukCatHomeViewState> {

    AdvertiseNoticeUseCase advertiseNoticeUseCase;

    CukCatHomeBloc(this.advertiseNoticeUseCase);

  @override
  // TODO: implement initialState
  CukCatHomeViewState get initialState => CukCatHomeViewState(type: CukCatHomeViewStateType.INITIAL);

  @override
  Stream<CukCatHomeViewState> mapEventToState(CukCatHomeEvent event) async* {
    if(event is StartAdvertiseNoticeEvent){
      yield CukCatHomeViewState(
        type: CukCatHomeViewStateType.START_FETCH_POPULAR_ITEMS,
        isShowLoadingBar: true
      );
      yield CukCatHomeViewState(
        type: CukCatHomeViewStateType.FINISH_FETCH_POPULAR_ITEMS,
        isShowLoadingBar: false,
        popularItems: await advertiseNoticeUseCase.getPopularItems()
      );
    }
  }



}
