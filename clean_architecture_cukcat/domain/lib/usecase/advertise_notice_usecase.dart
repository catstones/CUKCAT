import 'package:domain/entitiy/advertise_notice.dart';
import 'package:domain/entitiy/advertise_notice_item.dart';

class AdvertiseNoticeUseCase {
  IAdvertiseNoticeRepository advertiseNoticeRepository;

  AdvertiseNoticeUseCase(this.advertiseNoticeRepository);

  Future<AdvertiseNotice> getPreviewsAdvertiseNotice() {
    return Future.value(null);
  }

  Future<List<AdvertiseNotice>> getPreviewsAdvertiseNotices() {
    return Future.value([]);
  }

  Future<AdvertiseNotice> addAdvertiseNoticeItem(
      AdvertiseNoticeItem advertiseNoticeItem) {
    return Future.value(null);
  }

  Future<List<AdvertiseNoticeItem>> getPopularItems() {
    return advertiseNoticeRepository.fetchPopularItem();
  }
}

abstract class IAdvertiseNoticeRepository {
  Future<AdvertiseNotice> fetchPreviewsAdvertiseNotice();

  Future<List<AdvertiseNotice>> fetchPreviewsAdvertiseNotices();

  Future<AdvertiseNotice> insertAdvertiseNotice(
      AdvertiseNoticeItem advertiseNoticeItem);

  Future<List<AdvertiseNoticeItem>> fetchPopularItem();
}
