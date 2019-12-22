
import 'package:domain/entitiy/advertise_notice.dart';
import 'package:domain/entitiy/advertise_notice_item.dart';

class CukCatHomeViewState {
  CukCatHomeViewStateType type;

  AdvertiseNotice currentAdvertiseNotice;
  List<AdvertiseNoticeItem> previousAdvertiseNotice;
  AdvertiseNotice selectedPreviousAdvertiseNotice;

  List<AdvertiseNoticeItem> popularItems;
  bool isShowLoadingBar;
  Exception exception;

  CukCatHomeViewState(
      {this.type,
      this.currentAdvertiseNotice,
      this.previousAdvertiseNotice,
      this.selectedPreviousAdvertiseNotice,
      this.popularItems= const [],
      this.isShowLoadingBar = false,
      this.exception});

  CukCatHomeViewState copyWith(
          {CukCatHomeViewStateType type,
          AdvertiseNotice currentAdvertiseNotice,
          List<AdvertiseNoticeItem> previousAdvertiseNotice,
          AdvertiseNotice selectedPreviousAdvertiseNotice,
          List<AdvertiseNoticeItem> popularItems,
          bool isShowLoadingBar,
          Exception exception}) =>
      CukCatHomeViewState(
          type: type ?? this.type,
          currentAdvertiseNotice:
              currentAdvertiseNotice ?? this.currentAdvertiseNotice,
          previousAdvertiseNotice:
              previousAdvertiseNotice ?? this.previousAdvertiseNotice,
          selectedPreviousAdvertiseNotice: selectedPreviousAdvertiseNotice ??
              this.selectedPreviousAdvertiseNotice,
          popularItems: popularItems ?? this.popularItems,
          isShowLoadingBar: isShowLoadingBar ?? this.isShowLoadingBar,
          exception: exception ?? this.exception);
}

enum CukCatHomeViewStateType {
  INITIAL,
  START_FETCH_POPULAR_ITEMS,
  FINISH_FETCH_POPULAR_ITEMS,
}
